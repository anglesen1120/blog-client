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

export default function PostDetailsPage() {
  const dispatch = useDispatch();
  const { userId, postId } = useParams();
  const comments = useSelector(state => state.postDetailsReducer.comments);
  const isLoading = useSelector(state => state.postDetailsReducer.isLoading);
  const isShowComments = useSelector(
    state => state.postDetailsReducer.isShowComments
  );
  const userDetailsData = useSelector(
    state => state.userDetailsReducer.userDetailsData[postId - 1]
  );
  const userName = useSelector(
    state => state.homeReducer.usersData[userId - 1].name
  );
  const handleToggleComments = () => {
    dispatch(toggleShowCommentsAction());
    if (!isShowComments) dispatch(handleComments());
  };
  const handleAddComment = () => dispatch(openCommentModalAction());

  function handleComments() {
    return dispatch => {
      dispatch(getCommentsAction());

      axios
        .get(`${api.comments}?postId=${postId}`)
        .then(res => dispatch(getCommentsSuccessAction(res.data)))
        .catch(error => dispatch(getCommentsErrorAction(error)));
    };
  }

  return (
    <div>
      <div>{userName}</div>
      <LinkWrapper to={`/user/${userId}`}>
        <div>back</div>
      </LinkWrapper>

      <div>{userDetailsData && userDetailsData.title}</div>
      <div>{userDetailsData && userDetailsData.body}</div>

      <div>
        <div onClick={handleToggleComments}>
          {isShowComments ? "Hide comments" : "Show comments"}
        </div>
        {isShowComments ? (
          <div onClick={handleAddComment}>Add comment</div>
        ) : (
          <div />
        )}
      </div>

      {!isLoading && comments.length && isShowComments
        ? comments.map(comment => (
            <Item key={comment.id}>
              <div>
                <ItemTitle>{comment.name}</ItemTitle>
                <ItemContact>{comment.email}</ItemContact>
              </div>
              <ItemDescription>{comment.body}</ItemDescription>
            </Item>
          ))
        : null}
    </div>
  );
}
