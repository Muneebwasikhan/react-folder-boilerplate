import React from 'react';
import PropTypes from 'prop-types';

const MainContent = props => (
  <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">{props.children}</div>
);

MainContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContent;
