import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteReport} from '../store/index.js'


const ReportIndexItem = ({ report }) => {
  const dispatch = useDispatch();

  const deleteClick = (e) => {
    e.preventDefault();

    dispatch(deleteReport(report.id));
  };

  return (
    <li>
      <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
      <Link to={`/reports/${report.id}/edit`}>Edit</Link>
      <button onClick={deleteClick}>Delete</button>
    </li>
  );
};

export default ReportIndexItem;
