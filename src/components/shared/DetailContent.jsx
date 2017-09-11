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
    <div className="table-responsive">
      <h2 className={props.headerClass}>{heading}</h2>
      <table className="table">
        <tbody>
          {Object.keys(object).map(property => (
            <tr key={`${property}_${object.id}`}>
              <td>{property}</td>
              <td>{object[property]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// At least an id which is a number should be provided
DetailContent.propTypes = {
  headerClass: PropTypes.string,
  heading: PropTypes.string,
  object: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
};

DetailContent.defaultProps = {
  heading: defaultDetailsHeading,
  headerClass: '',
};

export default DetailContent;
