import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';
import {useSelector, useDispatch} from 'react-redux';
import { resetReports } from '../store';

const ReportIndex = () => {
  const reports = useSelector((state) => state.reports);
  const dispatch = useDispatch();

  const resetData = (e) => {
    e.preventDefault();
    dispatch(resetReports())
  };

  return (
    <section>
      <ul>
        {
          Object.values(reports).map(report => (
            <ReportIndexItem
              report={report}
              key={report.id}
            />
          ))
        }
      </ul>
      <Link to="/reports/new">New Report</Link>
      <button onClick={resetData}>Reset Data</button>
    </section>
  );
}

export default ReportIndex;
