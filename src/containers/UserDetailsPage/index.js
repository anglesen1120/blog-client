/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LinkWrapper } from "../../components/Link";
import axios from "axios";
import { api } from "../../utils";
import {
  loadUserDetailsDataAction,
  loadUserDetailsDataSuccessAction,
  loadUserDetailsDataErrorAction,
  removePostAction,
  removePostSuccessAction,
  removePostErrorAction,
  openPostModalAction
} from "../../actions/userDetailsAction";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Item, ItemTitle } from "../../components/Listing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlusCircle,
  faTrashAlt,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { Action } from "../../components/Header/Action.style";
import { Loading } from "../../components/Loading";

export default function UserDetailsPage() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const isLoading = useSelector(state => state.userDetailsReducer.isLoading);
  const userDetailsData = useSelector(
    state => state.userDetailsReducer.userDetailsData
  );
  const user = useSelector(state =>
    state.homeReducer.usersData.find(({ id }) => id === parseInt(userId, 10))
  );
  const onRemovePost = postId => handlePost(postId);
  const onOpenPostModal = () => dispatch(openPostModalAction());
  const handleUserDetailsData = async () => {
    dispatch(loadUserDetailsDataAction());

    await axios
      .get(`${api.posts}?userId=${userId}`)
      .then(res => dispatch(loadUserDetailsDataSuccessAction(res.data)))
      .catch(error => dispatch(loadUserDetailsDataErrorAction(error)));
  };
  const handlePost = async postId => {
    dispatch(removePostAction());

    await axios
      .delete(`${api.posts}/${postId}`)
      .then(res => dispatch(removePostSuccessAction(postId)))
      .catch(error => dispatch(removePostErrorAction(error)));
  };

  useEffect(() => {
    handleUserDetailsData();
  }, []);

  return (
    <Layout>
      <Header>
        <LinkWrapper to={`/`}>
          <Action>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} /> <span>Back</span>
          </Action>
        </LinkWrapper>

        <ItemTitle>{user.name}</ItemTitle>

        <Action onClick={onOpenPostModal}>
          <FontAwesomeIcon size="lg" icon={faPlusCircle} />
        </Action>
      </Header>

      {!isLoading && userDetailsData.length ? (
        userDetailsData.map(userDetailData => (
          <Item isUserDetail key={userDetailData.id}>
            <div>
              <FontAwesomeIcon
                onClick={() => onRemovePost(userDetailData.id)}
                size="lg"
                icon={faTrashAlt}
              />

              <LinkWrapper
                to={`/user/${userDetailData.userId}/${userDetailData.id}`}
              >
                <span>{userDetailData.title}</span>
              </LinkWrapper>
            </div>

            <FontAwesomeIcon size="lg" icon={faChevronRight} />
          </Item>
        ))
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
