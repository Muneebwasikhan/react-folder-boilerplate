import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Navbar = (props) => {
  const Navs = props.Navs;
  const links = props.links;
  const length = links.length === 0 ? 1 : links.length;
  const navsDivLength = length % 9;
  const logo = props.logo;
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
  logo: PropTypes.oneOf([React.img, PropTypes.string]).isRequired,
};
export default Navbar;
