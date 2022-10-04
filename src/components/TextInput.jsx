import React, { useCallback } from 'react'
import { TextField } from '@mui/material'
import { useAppContext } from '../AppContext'

function TextInput({ label, placeholder, name, required, handler }) {

  const { partnerData, setPartnerData, errors } = useAppContext();


  const handleChange = useCallback(
    (e) => {
      const data = e.target.value;
      setPartnerData({ ...partnerData, [name]: data });
      handler(e);
    },
    [name, partnerData, setPartnerData, handler]
  );




  return (
    <div className="textInput">
      <div className="wrapper">
        <span>
          {label} {required === "true" ? <sup>*</sup> : ""}
        </span>
        <TextField
          id="inputfield"
          value={partnerData[name]}
          onChange={handleChange}
          label={placeholder}
          variant="standard"
          name={name}
        />
        {errors[name] && <span className='error'>please enter a valid response</span>}
      </div>
    </div>
  );
}

export default TextInput