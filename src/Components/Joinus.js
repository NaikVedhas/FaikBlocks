import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./LoginSignUpJoinUs.css";

const JoinUs = ({ onClose }) => {
  const [Productname, setProductname] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [Companyname, setCompanyname] = useState("");
  const [Productcost, setProductcost] = useState("");
  const [WalletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [allEntries, setAllEntries] = useState([]);

  // const dateObject = new Date(selectedDate);
  // const timeStamp = dateObject.getTime();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newEntry = {
      Productname: Productname,
      selectedDate: selectedDate,
      Companyname: Companyname,
      Productcost: Productcost,
      WalletAddress: WalletAddress,
      password: password,
    };

    setAllEntries([...allEntries, newEntry]);

    console.log(newEntry);
    setProductname("");
    setSelectedDate("");
    setCompanyname("");
    setWalletAddress("");
    setPassword("");
  };

  return (
    <>
      <div className="container-wrapper" onClick={onClose}></div>
      <form onSubmit={onSubmitForm} className="joinus-container">
        <div className="design">
          <div className="pill-2 rotate-45"></div>
          <div className="pill-3 rotate-45"></div>
        </div>
        <IoCloseCircle className="icon-close-joinus" onClick={onClose} />
        <h1> Join Us </h1>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="productname"
          id="productname"
          autoComplete="off"
          value={Productname}
          onChange={(e) => setProductname(e.target.value)}
          required={true}
        />

        <input
          type="Date"
          placeholder="Enter Expiry Date"
          name="Date"
          id="Date"
          autoComplete="off"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required={true}
        />

        <input
          type="text"
          placeholder="Enter Company Name"
          name="Companyname"
          id="Companyname"
          autoComplete="off"
          value={Companyname}
          onChange={(e) => setCompanyname(e.target.value)}
          required={true}
        />

        <input
          type="number"
          placeholder="Enter Product Cost"
          name="Productcost"
          id="Productcost"
          autoComplete="off"
          value={Productcost}
          onChange={(e) => setProductcost(e.target.value)}
          required={true}
        />

        <input
          type="text"
          placeholder="Enter Wallet Address"
          name="WalletAddress"
          id="Companyname"
          autoComplete="off"
          value={WalletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required={true}
        />

        <input
          type="password"
          placeholder="Enter uuid"
          Productname="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />

        <button className="btn"> Join Us</button>
      </form>
    </>
  );
};

export default JoinUs;
