import "./styles.css";
import { useState } from "react";
export default function App() {
  const [otp, setOtp] = useState("0000");
  const getOtp = () => {
    const digits = "0123456789";
    let newOtp = "";
    for (let i = 0; i < 4; i++) {
      let index = Math.floor(Math.random() * 10);
      console.log(index);
      newOtp += digits[index];
    }
    return newOtp;
  };

  return (
    <div className="App">
      <h1>Get random OTP</h1>
      <h2>{otp}</h2>
      <button onClick={() => setOtp(getOtp())}> Get OTP</button>
    </div>
  );
}
