import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Navbar = (props) => {
  const Navs = props.Navs;
  const links = props.links;
  const length = links.length === 0 ? 1 : links.length;
  const navsDivLength = length % 9;
  const siteTitle = props.siteTitle;
  const logoImage = props.onlyLogo ? (
    <img src={props.logo} alt={siteTitle} />
  ) : (
    <span>
      <img src={props.logo} alt={siteTitle} />
      {` ${siteTitle}`}
    </span>
  );
  const logo = props.logo.length > 0 ? logoImage : siteTitle;
  return (
    <nav id="navbar" className="lay_row lay_strict">
      <div className="lay_col on_small_12 on_medium_4">
        <div className="lay_container">
          <div className="lay_row lay_strict">
            <div id="brand" className="lay_col on_small_11 on_medium_12">
              <a className="" href="/">
                {logo}
              </a>
            </div>
            <div className="lay_col on_small_1 on_medium_0">
              <button type="button">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lay_col on_small_0 on_medium_${navsDivLength} on_medium_offset_${8 -
          navsDivLength}`}
      >
        <div className="lay_container">
          <Navs
            extraClass="lay_row"
            linkClass={`lay_col on_small_12 on_medium_${12 / length}`}
            links={links}
          />
        </div>
      </div>
    </nav>
  );
};

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
