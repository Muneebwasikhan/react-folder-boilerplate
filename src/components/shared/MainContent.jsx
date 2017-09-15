import React from 'react';
import PropTypes from 'prop-types';

const MainContent = props => (
  <div className="lay_col on_small_12 on_medium_9 on_large_10 main">{props.children}</div>
);

MainContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContent;
