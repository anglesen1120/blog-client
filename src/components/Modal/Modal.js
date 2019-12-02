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
    if (isShowCommentModal) handleComments();
    if (isShowPostModal) handlePosts();
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

        <Form onSubmit={onSubmitModal}>
          {isShowPostModal && (
            <Wrapper>
              <label>Title</label>
              <input type="text" name="title" onChange={onChangeTitle} />
            </Wrapper>
          )}
          {isShowCommentModal && (
            <>
              <Wrapper>
                <label>Name</label>
                <input type="text" name="name" onChange={onChangeName} />
              </Wrapper>
              <Wrapper>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeEmail} />
              </Wrapper>
            </>
          )}
          <Wrapper>
            <label>Body</label>
            <textarea type="text" name="body" onChange={onChangeBody} />
          </Wrapper>

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
