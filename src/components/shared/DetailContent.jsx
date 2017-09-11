/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const defaultDetailsHeading = 'Details';

const DetailContent = (props) => {
  let heading = props.heading;
  const object = props.object;
  // reset the heading if it is default
  if (heading === defaultDetailsHeading) {
    if (object.title) heading = object.title;
    else if (object.name) heading = object.name;
    else if (object.heading) heading = object.heading;
  }
  return (
    <div className="detail_content">
      <h2>{heading}</h2>
      <table className="table table-responsive">
        <tbody>
          {Object.keys(object).map((property, i) => (
            <tr key={i}>
              <td>{property}</td>
              <td>{object[property]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DetailContent.propTypes = {
  heading: PropTypes.string,
  object: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

DetailContent.defaultProps = {
  heading: defaultDetailsHeading,
};

export default DetailContent;
