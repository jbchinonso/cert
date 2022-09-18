import React, { useCallback } from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  // TextField
} from "@mui/material";

import {useAppContext} from "../AppContext"

function RadioGroupInput({ label, locations, required, name }) {
  const { partnerData, setPartnerData, errors } = useAppContext();
  
  const handleChange = useCallback((e) => {
    const data = e.target.value
    setPartnerData({...partnerData, [name]: data})
  },[name, partnerData, setPartnerData])

  return (
    <div className="redioGroup">
      <div className="wrapper">
        <FormControl>
          <FormLabel id="radio-buttons-group-label">
            <span className="span">
              {label}
              {required === "true" ? <sup>*</sup> : ""}
            </span>
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            value={partnerData[name]}
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {locations.map((location, i) => {
              return (
                <FormControlLabel
                  value={location}
                  control={<Radio />}
                  label={location}
                  key={i}
                />
              );
            })}
            {/* <FormControlLabel
              value="other"
              control={<Radio />}
              label={<TextField label="Other" variant="standard" />}
            /> */}
          </RadioGroup>
        {errors[name] && (
          <span className="error">please select a valid option</span>
        )}
        </FormControl>
      </div>
    </div>
  );
}

export default RadioGroupInput