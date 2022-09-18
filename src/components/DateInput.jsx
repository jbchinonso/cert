import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {useAppContext} from "../AppContext"

function DateInput({ label, required, name }) {
   
    const { partnerData, setPartnerData, errors } = useAppContext();

    const handleChange = React.useCallback((date) => {
        console.log(date.$d)
        setPartnerData({...partnerData, [name]: date.$d})
    }, [name, partnerData, setPartnerData])


  return (
    <div className="dateInput">
      <div className="wrapper">
        <span className="span">
          {label} {required === "true" ? <sup>*</sup> : ""}
        </span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="DD/MM/YYYY"
            label="dd/mm/yy"
            value={partnerData[name]}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
        {errors[name] && (
          <span className="error" style={{display: "block"}}>please select a valid Date</span>
        )}
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default DateInput;
