import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { api } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import {
  cancelCommentAction,
  addCommentAction,
  addCommentSuccessAction,
  addCommentErrorAction,
  changeCommentEmailAction,
  changeCommentBodyAction,
  changeCommentNameAction
} from "../../actions/postDetailsAction";
import {
  cancelPostAction,
  addPostAction,
  addPostSuccessAction,
  addPostErrorAction,
  changePostBodyAction,
  changePostTitleAction
} from "../../actions/userDetailsAction";

export default function ModalComponent() {
  const dispatch = useDispatch();
  const isShowPostModal = useSelector(
    state => state.userDetailsReducer.isShowModal
  );
  const isShowCommentModal = useSelector(
    state => state.postDetailsReducer.isShowModal
  );
  const onCloseModal = () => {
    if (isShowCommentModal) dispatch(cancelCommentAction());
    if (isShowPostModal) dispatch(cancelPostAction());
  };
  const onSubmitModal = event => {
    event.preventDefault();
    if (isShowCommentModal) dispatch(handleComments());
    if (isShowPostModal) dispatch(handlePosts());
  };
  const onChangeTitle = event =>
    dispatch(changePostTitleAction(event.target.value));
  const onChangeEmail = event =>
    dispatch(changeCommentEmailAction(event.target.value));
  const onChangeName = event =>
    dispatch(changeCommentNameAction(event.target.value));
  const onChangeBody = event => {
    if (isShowCommentModal)
      dispatch(changeCommentBodyAction(event.target.value));
    if (isShowPostModal) dispatch(changePostBodyAction(event.target.value));
  };

  function handleComments() {
    return dispatch => {
      dispatch(addCommentAction());

      axios
        .post(api.comments)
        .then(res => dispatch(addCommentSuccessAction(res.data)))
        .catch(error => dispatch(addCommentErrorAction(error)));
    };
  }

  function handlePosts() {
    return dispatch => {
      dispatch(addPostAction());

      axios
        .post(api.posts)
        .then(res => dispatch(addPostSuccessAction(res.data)))
        .catch(error => dispatch(addPostErrorAction(error)));
    };
  }

  return (
    <div>
      <Modal isOpen={isShowPostModal || isShowCommentModal}>
        <div>
          {(isShowPostModal && "Add post") ||
            (isShowCommentModal && "Add comment")}
        </div>

        <form onSubmit={onSubmitModal}>
          {isShowPostModal && (
            <>
              Title <input type="text" onChange={onChangeTitle} />
            </>
          )}
          {isShowCommentModal && (
            <>
              Name <input type="text" onChange={onChangeName} />
              Email <input type="email" onChange={onChangeEmail} />
            </>
          )}
          Body <input type="text" onChange={onChangeBody} />
          <button type="button" onClick={onCloseModal}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
}
