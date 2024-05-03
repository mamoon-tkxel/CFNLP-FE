import { useNavigate } from "react-router-dom";

const CountyProfileDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <span onClick={() => navigate(-1)}>{"<---"}</span>Profile for: Hourglass
      </h1>
      <h1>Addresses</h1>
      <h1>Friday Night Live County Coordinates</h1>
      <h1>Staff Members</h1>
      <h1>Founding Sources</h1>
      <h1>Chapter Information</h1>
    </div>
  );
};
export default CountyProfileDetail;
