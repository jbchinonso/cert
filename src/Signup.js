import React, { useState } from "react";
import Logo from "./components/Logo";
import PageLoader from "./components/PageLoader";
import { ToastContainer } from "react-toastify";
import HeaderText from "./components/HeaderText";
// import Text from "./components/Text";
import TextInput from "./components/TextInput";
import PhoneInput from "./components/PhoneInput";
import { Button } from "@mui/material";
import { useAppContext } from "./AppContext";
import toaster from "./toaster";

const signUpDataFields = {
  fullname: "",
  email: "",
  phone: "",
};
function Signup() {
  const [loading, setLoading] = useState("");
  const [signUpData, setSignUpData] = useState(signUpDataFields);
  const { setErrors, setPartnerData } = useAppContext();

  const handlePhone = (data) => {
    setSignUpData({ ...signUpData, phone: data });
  };

  const handleName = (event) => {
    const name = event.target.name;
    const data = event.target.value;
    setSignUpData({ ...signUpData, [name]: data });
  };

  const validate = (data) => {
    let success = true;

    for (const field in data) {
      let val = data[field];
      if (val.length < 5) {
        setErrors((errors) => {
          return { ...errors, [field]: true };
        });
        success = false;
      } else {
        setErrors((errors) => {
          return { ...errors, [field]: false };
        });
      }
    }

    return success;
  };

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const valid = validate(signUpData);

    if (!valid) {
      setLoading(false);
      toaster("error", "You have an Error in your form", 3000);
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    };

    try {
      const url = process.env.REACT_APP_BASE_URL;
      const resp = await fetch(`${url}cert/training/register`, requestOptions);
      const data = await resp.json();
      setLoading(false);

      if (data.status === 400) {
        toaster("error", data.message, 3000);
        return;
      }

      toaster("success", data.message, 3000);

      setPartnerData((partnerData) => {
        return { ...partnerData, ...signUpDataFields };
      });
      setSignUpData((signUpData) => {
        return { ...signUpData, phone: "" };
      });
      return;
    } catch (error) {
      setLoading(false);
      toaster("error", error.message, 3000);
      return;
    }
  };

  return (
    <div>
      {loading && <PageLoader />}
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <Logo />
          <HeaderText />
        </header>
        <TextInput
          label="Full Name (Legal Name)"
          placeholder="Fullname"
          name="fullname"
          required="true"
          handler={handleName}
        />

        <TextInput
          label="Email"
          placeholder="Email"
          name="email"
          required={"true"}
          handler={handleName}
        />

        <PhoneInput
          label="Phone Number"
          name="phone"
          required="true"
          value={signUpData["phone"]}
          handler={handlePhone}
        />
        <Button
          variant="contained"
          id="submitButton"
          color="error"
          onClick={signUp}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Signup;
