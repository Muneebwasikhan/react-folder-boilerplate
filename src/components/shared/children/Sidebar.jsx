import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(e) {
    const btn = e.target;
    this.setState(prevState => ({ expanded: !prevState.expanded }));
    console.log(this.state.expanded, btn.innerHTML);
    btn.innerHTML = btn.innerHTML === '&gt;' ? '&lt;' : '&gt;';
  }

  render() {
    const classForDisplay = this.state.expanded
      ? 'sidebar_overlayed sidebar'
      : 'lay_col on_small_2 on_medium_3 on_large_2 sidebar';
    return (
      <div className={classForDisplay}>
        <button id="more-button" onClick={this.handleBtnClick}>
          &gt;
        </button>
        {this.props.children}
      </div>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Sidebar;
