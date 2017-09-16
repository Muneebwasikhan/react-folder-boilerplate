import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListContent = (props) => {
  // get the objects to display
  const objectList = props.objects;
  const listHeadings = Object.keys(objectList[0]);
  return (
    <table className="table table-hover table-bordered">
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
            {listHeadings.map(title => (
              <td key={`${title}_${row.id}`}>
                <Link to={`/normal/${row.id}`}>{row[title]}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ListContent.propTypes = {
  objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListContent;
