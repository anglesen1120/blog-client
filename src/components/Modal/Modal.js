import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { api } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import {
  cancelCommentAction,
  addCommentAction,
  addCommentSuccessAction,
  addCommentErrorAction
} from "../../actions/postDetailsAction";
import {
  cancelPostAction,
  addPostAction,
  addPostSuccessAction,
  addPostErrorAction
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
              Title <input type="text" />
            </>
          )}
          {isShowCommentModal && (
            <>
              Name <input type="text" />
              Email <input type="email" />
            </>
          )}
          Body <input type="text" />
          <button type="button" onClick={onCloseModal}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
}
