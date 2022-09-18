import React, { useCallback } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {useAppContext} from "../AppContext"

function SelectInput({ label, required, name }) {
  const { partnerData, setPartnerData, errors } = useAppContext();
  const handleChange = useCallback(
    (e) => {
      const data = e.target.value;
      setPartnerData({ ...partnerData, [name]: data });
    },
    [name, partnerData, setPartnerData]
  );

  return (
    <div className="selectInput">
      <div className="wrapper">
        <span>
          {label} {required === "true" ? <sup>*</sup> : ""}
        </span>
        <FormControl>
          <InputLabel id="simple-select-label">Choose</InputLabel>
          <Select
            labelId="simple-select-label"
            id="demo-simple-select"
            value={partnerData[name]}
            label="Choose"
            onChange={handleChange}
          >
            {/* <MenuItem value={0}>Choose</MenuItem> */}
            <MenuItem value={"GIGM"}>GIGM</MenuItem>
            <MenuItem value={"GIGL"}>GIGL</MenuItem>
            <MenuItem value={"JETMOTORS"}>JETMOTORS</MenuItem>
            <MenuItem value={"RICHMOND HILL"}>RICHMOND HILL</MenuItem>
            <MenuItem value={"STELLAS MICRO-FINANCE BANK"}>
              STELLAS MICRO-FINANCE BANK
            </MenuItem>
            <MenuItem value={"ZIUSS ENERGY & POWER"}>
              ZIUSS ENERGY & POWER
            </MenuItem>
            <MenuItem value={"ZIUSS OIL & GAS"}>ZIUSS OIL & GAS</MenuItem>
            <MenuItem value={"DELTA LINE"}>DELTA LINE</MenuItem>
            <MenuItem value={"THE GIG GROUP"}>THE GIG GROUP</MenuItem>
          </Select>
        </FormControl>
        {errors[name] && (<span className="error">please select a valid option</span>)}
      </div>
    </div>
  );
}

export default SelectInput;
