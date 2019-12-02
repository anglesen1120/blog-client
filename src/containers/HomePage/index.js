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
  ItemTitle,
  ItemContact,
  ItemDescription
} from "../../components/Listing";
import { Button, ButtonWrapper } from "../../components/Button";
import { LinkWrapper } from "../../components/Link";
import { Layout } from "../../components/Layout";

export default function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.homeReducer.isLoading);
  const usersData = useSelector(state => state.homeReducer.usersData);
  const handleUsersData = async () => {
    dispatch(loadUsersDataAction());

    await axios
      .get(api.users)
      .then(res => dispatch(loadUsersDataSuccessAction(res.data)))
      .catch(error => dispatch(loadUsersDataErrorAction(error)));
  };

  useEffect(() => {
    handleUsersData();
  }, []);

  return (
    <Layout>
      <Listing>
        {!isLoading && usersData.length
          ? usersData.map(userData => (
              <Item key={userData.id}>
                <ItemTitle>{userData.name}</ItemTitle>
                <ItemContact>
                  <div>{userData.email}</div>
                  <div>{userData.phone}</div>
                  <div>{userData.website}</div>
                </ItemContact>

                <ItemDescription>
                  <div>{userData.company.name}</div>
                  <div>{userData.company.catchPhrase}</div>
                  <div>{userData.company.bs}</div>
                </ItemDescription>

                <ButtonWrapper>
                  <LinkWrapper to={`/user/${userData.id}`}>
                    <Button>Details</Button>
                  </LinkWrapper>
                </ButtonWrapper>
              </Item>
            ))
          : null}
      </Listing>
    </Layout>
  );
}
