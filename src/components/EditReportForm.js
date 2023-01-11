import { useParams } from 'react-router-dom';
import ReportForm from './ReportForm';
import { useSelector } from 'react-redux';

const EditReportForm = () => {
  const { reportId } = useParams();
  const reports = useSelector((state) => state.reports);
  const report = reports[reportId];

  return (
    <ReportForm report={report} formType="Update Report" />
  );
}

export default EditReportForm;
