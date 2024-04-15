import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CommingSoon = () => {
  const nav = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <h1>Coming Soon</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        className="btn btn-primary "
        onClick={() => {
          nav(-1);
        }}
      >
        <FaArrowLeft className="me-1 mb-1" />
        Back to Home
      </button>
    </div>
  );
};

export default CommingSoon;
