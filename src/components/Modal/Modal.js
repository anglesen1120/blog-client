import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { Button, ButtonWrapper } from "../Button";
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
import { StyledModal } from "./Modal.style";
import { Form, Wrapper } from "../Form";
import { Header } from "./Header.style";
import { ErrorWrapper } from "../Error";

export default function ModalComponent() {
  const dispatch = useDispatch();
  const isShowPostModal = useSelector(
    state => state.userDetailsReducer.isShowModal
  );
  const isShowCommentModal = useSelector(
    state => state.postDetailsReducer.isShowModal
  );
  const commentEmail = useSelector(state => state.postDetailsReducer.email);
  const commentBody = useSelector(state => state.postDetailsReducer.body);
  const commentName = useSelector(state => state.postDetailsReducer.name);
  const commentError = useSelector(state => state.postDetailsReducer.error);
  const postBody = useSelector(state => state.userDetailsReducer.body);
  const postTitle = useSelector(state => state.userDetailsReducer.title);
  const postError = useSelector(state => state.userDetailsReducer.error);

  const onCloseModal = () => {
    if (isShowCommentModal) dispatch(cancelCommentAction());
    if (isShowPostModal) dispatch(cancelPostAction());
  };
  const onSubmitModal = event => {
    event.preventDefault();
    if (isShowCommentModal) {
      if (!commentBody || !commentEmail || !commentName) {
        dispatch(addCommentErrorAction("Empty data"));
      } else handleComments();
    }

    if (isShowPostModal) {
      if (!postBody || !postTitle) {
        dispatch(addPostErrorAction("Empty data"));
      } else handlePosts();
    }
  };
  const onChangeTitle = event => dispatch(changePostTitleAction(event.target));
  const onChangeEmail = event =>
    dispatch(changeCommentEmailAction(event.target));
  const onChangeName = event => dispatch(changeCommentNameAction(event.target));
  const onChangeBody = event => {
    if (isShowCommentModal) dispatch(changeCommentBodyAction(event.target));
    if (isShowPostModal) dispatch(changePostBodyAction(event.target));
  };
  const handleComments = async () => {
    dispatch(addCommentAction());

    await axios
      .post(api.comments)
      .then(res => dispatch(addCommentSuccessAction(res.data)))
      .catch(error => dispatch(addCommentErrorAction(error)));
  };

  const handlePosts = async () => {
    dispatch(addPostAction());

    await axios
      .post(api.posts)
      .then(res => dispatch(addPostSuccessAction(res.data)))
      .catch(error => dispatch(addPostErrorAction(error)));
  };

  return (
    <div>
      <Modal style={StyledModal} isOpen={isShowPostModal || isShowCommentModal}>
        <Header>
          {(isShowPostModal && "Add post") ||
            (isShowCommentModal && "Add comment")}
        </Header>

        <Form onSubmit={onSubmitModal} isError={commentError || postError}>
          {isShowPostModal && (
            <Wrapper>
              <label>Title</label>
              <input
                required
                type="text"
                name="title"
                onChange={onChangeTitle}
              />
            </Wrapper>
          )}
          {isShowCommentModal && (
            <>
              <Wrapper>
                <label>Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  onChange={onChangeName}
                />
              </Wrapper>
              <Wrapper>
                <label>Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  onChange={onChangeEmail}
                />
              </Wrapper>
            </>
          )}
          <Wrapper>
            <label>Body</label>
            <textarea
              required
              type="text"
              name="body"
              onChange={onChangeBody}
            />
          </Wrapper>

          {(postError || commentError) && (
            <ErrorWrapper>{postError || commentError}</ErrorWrapper>
          )}

          <ButtonWrapper>
            <Button isModal type="button" onClick={onCloseModal}>
              Cancel
            </Button>
            <Button isModal isSave type="submit">
              Save
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </div>
  );
}
