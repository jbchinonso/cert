import { Button } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Logo from "./components/Logo";
import PageLoader from "./components/PageLoader";
import Text from "./components/Text";
import TextInput from "./components/TextInput";
import toaster from "./toaster";

function Attendance() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const markAttendance = async(e) => {
     e.preventDefault();
    setLoading(true);
   

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email}),
    };

    try {
      const url = process.env.REACT_APP_BASE_URL;
      const resp = await fetch(`${url}cert/users/attendance`, requestOptions);
      const data = await resp.json();
      setLoading(false);

      if (data.status === 400) {
        toaster("error", data.message, 3000);
        return;
      }

      toaster("success", data.message, 3000);
    } catch (error) {
      setLoading(false);
      toaster("error", error.message, 3000);
      return;
    }
  };
  return (
    <React.Fragment>
      {loading && <PageLoader />}
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <Logo />
          <Text
            title={"Attendance Register"}
            content={
              "Thanks for showing up today, Please sign in with your official/work email address below"
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
    </React.Fragment>
  );
}

export default Attendance;
