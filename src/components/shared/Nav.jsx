import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const target = e.target;
    this.setState({ active: target.id });
  }

  render() {
    const links = this.props.links;
    const extraClass = this.props.extraClass;
    const linkClass = this.props.linkClass;
    return (
      <ul className={`nav ${extraClass}`}>
        {links.map((linkElement) => {
          const active = this.state.active === linkElement.id ? 'active' : '';
          return (
            <li key={linkElement.id} className={`${active} ${linkClass}`}>
              <Link
                key={linkElement.id}
                id={linkElement.id}
                onClick={this.handleClick}
                to={linkElement.path}
              >
                {linkElement.anchor}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

Nav.propTypes = {
  extraClass: PropTypes.string.isRequired,
  linkClass: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      path: PropTypes.string.isRequired,
      anchor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

Nav.defaultProps = {
  links: [],
  linkClass: '',
};

export default Nav;
