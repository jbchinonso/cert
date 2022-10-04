import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import { useAppContext } from "../AppContext";

import "../assets/styles/components.css";
function PhoneInput({ label, required, name, value, handler}) {

  const { errors } = useAppContext();

  const handleOnChange = (value) => {
    handler(value)
  };

  return (
    <div className="textInput">
      <div className="wrapper">
        <span>
          {label} {required === "true" ? <sup>*</sup> : ""}
        </span>
        <MuiTelInput
          value={value}
          defaultCountry={"NG"}
          onChange={handleOnChange}
          variant="standard"
          name={name}
          forceCallingCode
        />
        {errors[name] && (
          <span className="error">please enter a valid response</span>
        )}
      </div>
    </div>
  );
}

export default PhoneInput;
