import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => (
  <div className="lay_col on_small_0 on_medium_3 on_large_2 sidebar">{props.children}</div>
);

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Sidebar;
