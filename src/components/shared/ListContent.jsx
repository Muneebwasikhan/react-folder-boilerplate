/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListContent = (props) => {
  // get the objects to display
  const objectList = props.objects;
  const listHeadings = Object.keys(objectList[0]);
  return (
    <table className="table table-responsive table-hover table-bordered">
      <thead className="thead-inverse">
        <tr>
          <th>#</th>
          {listHeadings.map(title => <th key={title}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {objectList.map((row, i) => (
          <tr key={row.id}>
            <th scope="row">{i}</th>
            {listHeadings.map((title, j) => (
              <td key={j}>
                <Link to={`/normal/${row.id}`}>{row[title]}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Failed to make it specific enough to require an id property
ListContent.propTypes = {
  objects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListContent;
