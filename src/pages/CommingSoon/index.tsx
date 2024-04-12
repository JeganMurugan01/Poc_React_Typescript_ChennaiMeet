import { FaArrowLeft } from "react-icons/fa";

const CommingSoon = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <h1>Comming Soon</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="btn btn-primary ">
        <FaArrowLeft className="me-1 mb-1" />
        Back to Home
      </button>
    </div>
  );
};

export default CommingSoon;
