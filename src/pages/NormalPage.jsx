/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import DetailContent from '../components/shared/containers/DetailContent';
import ListContent from '../components/shared/containers/ListContent';
import MainContent from '../components/shared/containers/MainContent';
import Sidebar from '../components/shared/children/Sidebar';
import Nav from '../components/shared/children/Nav';

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

const linkArray = [
  {
    id: 'home',
    path: '/',
    anchor: 'home',
  },
  {
    id: 'normal',
    path: '/normal',
    anchor: 'normal',
  },
  {
    id: 'unknown',
    path: '/random',
    anchor: '404',
  },
];

/* eslint-disable react/prop-types */
const NormalPage = () => (
  <div className="lay_row lay_strict">
    <Sidebar>
      <Nav links={linkArray} extraClass="nav-sidebar" />
    </Sidebar>
    <MainContent>
      <Switch>
        <Route
          exact
          path="/normal"
          render={props => (
            <div className="table-responsive">
              <h2 className="sub-header">Shopping Lists</h2>
              <ListContent headerClass="page-header" objects={shoppingLists} {...props} />
            </div>
          )}
        />
        <Route
          exact
          path="/normal/:id"
          render={props => (
            <DetailContent
              headerClass="page-header"
              object={shoppingLists.find(list => list.id.toString() === props.match.params.id)}
              {...props}
            />
          )}
        />
      </Switch>
    </MainContent>
  </div>
);
/* eslint-enable react/prop-types */

export default NormalPage;
