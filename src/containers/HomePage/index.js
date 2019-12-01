/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUsersDataAction,
  loadUsersDataSuccessAction,
  loadUsersDataErrorAction
} from "../../actions/homeAction";
import { api } from "../../utils";
import axios from "axios";
import {
  Listing,
  Item,
  ItemName,
  ItemContact,
  ItemCompany
} from "../../components/Listing";
import { Button, ButtonWrapper } from "../../components/Button";
import { LinkWrapper } from "../../components/Link";

export default function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.homeReducer.isLoading);
  const usersData = useSelector(state => state.homeReducer.usersData);

  function handleUsersData() {
    return dispatch => {
      dispatch(loadUsersDataAction());

      axios
        .get(api.users)
        .then(res => dispatch(loadUsersDataSuccessAction(res.data)))
        .catch(error => dispatch(loadUsersDataErrorAction(error)));
    };
  }

  useEffect(() => {
    dispatch(handleUsersData());
  }, []);

  return (
    <Listing>
      {!isLoading && usersData.length
        ? usersData.map(userData => (
            <Item key={userData.id}>
              <ItemName>{userData.name}</ItemName>
              <ItemContact>
                <div>{userData.email}</div>
                <div>{userData.phone}</div>
                <div>{userData.website}</div>
              </ItemContact>

              <ItemCompany>
                <div>{userData.company.name}</div>
                <div>{userData.company.catchPhrase}</div>
                <div>{userData.company.bs}</div>
              </ItemCompany>

              <ButtonWrapper>
                <LinkWrapper to={`/user/${userData.id}`}>
                  <Button>Details</Button>
                </LinkWrapper>
              </ButtonWrapper>
            </Item>
          ))
        : null}
    </Listing>
  );
}
