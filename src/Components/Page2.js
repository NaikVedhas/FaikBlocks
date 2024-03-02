import { useNavigate } from "react-router-dom";
import "./Pages.css";

const Page2 = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="page2-container">
        <div className="tick-icon"></div>
        <div class="rubber_stamp">Expired</div>
        <h3>
          Product is Original <p className="out-of">But Out Of Expiry Date!</p>
        </h3>
        <div className="details">
          <p>Product Name : {/*data from backend */} </p>
          <p>Manufacturing Company : {/*data from backend */} </p>
          <p>Date of Expiry : {/*data from backend */}</p>
          <button
            className="payment-btn"
            onClick={() => {
              alert("Can not make Payment, Product is Already Expired !");
            }}
          >
            Payment
          </button>
          <p className="go-back" onClick={gotohome}>
            Go back!
          </p>
        </div>
      </div>
    </>
  );
};

export default Page2;
