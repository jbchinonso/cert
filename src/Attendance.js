import { Button } from "@mui/material";
import React,{useState} from "react";
import { ToastContainer } from "react-toastify";
import Logo from "./components/Logo";
import Text from "./components/Text";
import TextInput from "./components/TextInput";

function Attendance() {
    const [email, setEmail] = useState("");

    const markAttendance = () => {
        console.log(email)
    }
  return (
    <div className="App">
      {" "}
      <ToastContainer />
      <header className="App-header">
        <Logo />
        <Text
          title={"Attendance Register"}
          content={
            "Thanks for showing up today, please sign in with your email address below"
          }
        />
      </header>
      <TextInput
        label="Email"
        placeholder="Email"
        name="email"
        required={"true"}
        handler={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        variant="contained"
        id="submitButton"
        color="error"
        onClick={markAttendance}
      >
        Mark Attendance
      </Button>
    </div>
  );
}

export default Attendance;
