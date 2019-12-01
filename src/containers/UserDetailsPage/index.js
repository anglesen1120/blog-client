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
  removePostErrorAction
} from "../../actions/userDetailsAction";
import { Header } from "../../components/Header";

export default function UserDetailsPage() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const isLoading = useSelector(state => state.userDetailsReducer.isLoading);
  const userDetailsData = useSelector(
    state => state.userDetailsReducer.userDetailsData
  );
  const userName = useSelector(
    state => state.homeReducer.usersData[userId - 1].name
  );
  const onRemovePost = postId => dispatch(handlePost(postId));

  function handleUserDetailsData() {
    return dispatch => {
      dispatch(loadUserDetailsDataAction());

      axios
        .get(`${api.posts}?userId=${userId}`)
        .then(res => dispatch(loadUserDetailsDataSuccessAction(res.data)))
        .catch(error => dispatch(loadUserDetailsDataErrorAction(error)));
    };
  }

  function handlePost(postId) {
    return dispatch => {
      dispatch(removePostAction());

      axios
        .delete(`${api.posts}/${postId}`)
        .then(res => dispatch(removePostSuccessAction(postId)))
        .catch(error => dispatch(removePostErrorAction(error)));
    };
  }

  useEffect(() => {
    dispatch(handleUserDetailsData());
  }, []);

  return (
    <div>
      <Header>
        <div>back</div>
        <div>{userName}</div>
        <div>add</div>
      </Header>

      <br />

      {!isLoading && userDetailsData.length
        ? userDetailsData.map(userDetailData => (
            <div key={userDetailData.id}>
              <div onClick={() => onRemovePost(userDetailData.id)}>Trash</div>
              <LinkWrapper
                to={`/user/${userDetailData.userId}/${userDetailData.id}`}
              >
                {userDetailData.title}
              </LinkWrapper>
            </div>
          ))
        : null}
    </div>
  );
}
