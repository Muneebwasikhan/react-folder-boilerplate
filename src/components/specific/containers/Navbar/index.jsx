import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../../shared/non-containers/Nav';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navVisible: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({ navVisible: !prevState.navVisible }));
  }

  render() {
    const Navs = this.props.Navs;
    const links = this.props.links;
    const length = links.length === 0 ? 1 : links.length;
    const navsDivLength = length % 9;
    const siteTitle = this.props.siteTitle;
    const logoImage = this.props.onlyLogo ? (
      <img src={this.props.logo} alt={siteTitle} />
    ) : (
      <span>
        <img src={this.props.logo} alt={siteTitle} />
        {` ${siteTitle}`}
      </span>
    );
    const mobileNavsLength = this.state.navVisible ? 12 : 0;
    const logo = this.props.logo.length > 0 ? logoImage : siteTitle;
    return (
      <nav id="navbar" className="lay_row lay_strict">
        <div className="lay_col on_small_12 on_medium_4">
          <div className="lay_container">
            <div className="lay_row lay_strict">
              <div id="brand" className="lay_col on_small_10 on_medium_12">
                <a className="" href="/">
                  {logo}
                </a>
              </div>
              <div className="lay_col on_small_2 on_medium_0">
                <div className="navbar-inverse" style={{ marginTop: '14%', marginBottom: '14%' }}>
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.handleToggle}
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="navs"
          className={`lay_col on_small_${mobileNavsLength} on_medium_${navsDivLength} on_medium_offset_${8 -
            navsDivLength}`}
        >
          <div className="lay_container">
            <Navs
              extraClass="lay_row lay_strict"
              linkClass={`lay_col on_small_12 on_medium_${12 / length}`}
              links={links}
            />
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      path: PropTypes.string,
      anchor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  Navs: PropTypes.oneOf([Nav]).isRequired,
  siteTitle: PropTypes.string.isRequired,
  logo: PropTypes.string,
  onlyLogo: PropTypes.bool,
};
Navbar.defaultProps = {
  logo: '',
  onlyLogo: true,
};

export default Navbar;
