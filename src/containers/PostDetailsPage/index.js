import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../../utils";

import {
  toggleShowCommentsAction,
  getCommentsAction,
  getCommentsSuccessAction,
  getCommentsErrorAction,
  openCommentModalAction
} from "../../actions/postDetailsAction";
import {
  Item,
  ItemTitle,
  ItemContact,
  ItemDescription
} from "../../components/Listing";
import { LinkWrapper } from "../../components/Link";
import { Layout } from "../../components/Layout";
import { Header, Empty, Wrapper } from "../../components/Header";
import { Action } from "../../components/Header/Action.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Title, Body } from "../../components/Detail";
import { Content } from "../../components/Detail/Content.style";
import { Loading } from "../../components/Loading";

export default function PostDetailsPage() {
  const dispatch = useDispatch();
  const { userId, postId } = useParams();
  const comments = useSelector(state => state.postDetailsReducer.comments);
  const isLoading = useSelector(state => state.postDetailsReducer.isLoading);
  const isShowComments = useSelector(
    state => state.postDetailsReducer.isShowComments
  );
  const userDetailsData = useSelector(state =>
    state.userDetailsReducer.userDetailsData.find(
      ({ id }) => id === parseInt(postId, 10)
    )
  );
  const user = useSelector(state =>
    state.homeReducer.usersData.find(({ id }) => id === parseInt(userId, 10))
  );
  const handleToggleComments = () => {
    dispatch(toggleShowCommentsAction());
    if (!isShowComments) handleComments();
  };
  const handleAddComment = () => dispatch(openCommentModalAction());
  const handleComments = async () => {
    dispatch(getCommentsAction());

    await axios
      .get(`${api.comments}?postId=${postId}`)
      .then(res => dispatch(getCommentsSuccessAction(res.data)))
      .catch(error => dispatch(getCommentsErrorAction(error)));
  };

  return (
    <Layout>
      <Header>
        <LinkWrapper to={`/user/${userId}`}>
          <Action>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} /> <span>Back</span>
          </Action>
        </LinkWrapper>

        <ItemTitle>{user.name}</ItemTitle>

        <Empty />
      </Header>

      <Content>
        <Title>{userDetailsData.title}</Title>
        <Body>{userDetailsData.body}</Body>
      </Content>

      <Wrapper>
        <ItemContact onClick={handleToggleComments}>
          {isShowComments ? "Hide comments" : "Show comments"}
        </ItemContact>

        {isShowComments ? (
          <ItemContact onClick={handleAddComment}>Add comment</ItemContact>
        ) : (
          <Empty />
        )}
      </Wrapper>

      {!isLoading && comments.length && isShowComments
        ? comments.map(comment => (
            <Item isPostComment key={comment.id}>
              <Wrapper isPostComment>
                <ItemTitle>{comment.name}</ItemTitle>
                <ItemContact>{comment.email}</ItemContact>
              </Wrapper>
              <ItemDescription>{comment.body}</ItemDescription>
            </Item>
          ))
        : isLoading && <Loading />}
    </Layout>
  );
}
