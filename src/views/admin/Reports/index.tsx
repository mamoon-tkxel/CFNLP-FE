import { useNavigate } from "react-router-dom";

const AdminReports = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Abstract Reports</h1>
        <h5>
          Customized reports of all aspects of abstracts. Pick specific dates to
          view activity for only that time window
        </h5>
      </div>

      <div className="report-cards">
        <div>
          <h3>Traffic Safety Education Initiative</h3>
          <h5>Office of Traffic safety</h5>
          <button onClick={() => navigate("/admin/reports/1212")}>
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminReports;
