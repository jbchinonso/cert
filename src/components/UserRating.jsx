import React, { useCallback } from 'react'
import Box from "@mui/material/Box";
import { Rating, Typography } from "@mui/material";
import {useAppContext} from "../AppContext"

import '../assets/styles/components.css'

function UserRating({
  label,
  volume,
  name,
  required,
  low = "Strongly Disagree",
  high = "Strongly Agree",
}) {
  const { partnerData, setPartnerData, errors } = useAppContext();

  const handleChange = useCallback(
    (e) => {
      const rating = parseInt(e.target.value);
      setPartnerData({ ...partnerData, [name]: rating });
    },
    [name, partnerData, setPartnerData]
  );

  return (
    <div className="userRating">
      <div className="wrapper">
        <span className="span">
          {label} {required === "true" ? <sup>*</sup> : ""}
        </span>
        <Box>
          <Typography component="legend">{low}</Typography>
          <Rating
            name="customized-10"
            value={partnerData[name]}
            defaultValue={0}
            max={volume}
            size="large"
            onChange={handleChange}
          />
          <Typography component="legend">{ high }</Typography>
        </Box>
        {errors[name] && (
          <span
            className="error"
            style={{ textAlign: "center", display: "block" }}
          >
            please enter a valid rating
          </span>
        )}
      </div>
    </div>
  );
}

export default UserRating;