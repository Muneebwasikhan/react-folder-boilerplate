/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailContent from '../components/shared/DetailContent';
import ListContent from '../components/shared/ListContent';

const shoppingLists = [
  {
    id: 1,
    title: 'Groceries',
    items: 3,
  },
  {
    id: 2,
    title: 'Shoes',
    items: 67,
  },
  {
    id: 3,
    title: 'Party things',
    items: 300,
  },
];

/* eslint-disable react/prop-types */
const NormalPage = () => (
  <Switch>
    <Route
      exact
      path="/normal"
      render={props => <ListContent objects={shoppingLists} {...props} />}
    />
    <Route
      exact
      path="/normal/:id"
      render={props => <DetailContent object={shoppingLists[props.match.params.id]} {...props} />}
    />
  </Switch>
);
/* eslint-enable react/prop-types */

export default NormalPage;
