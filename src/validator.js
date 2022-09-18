

function validator(partnerData, errors, setErrors) {

  let success = true;
  for (const name in partnerData) {
    let field = partnerData[name];
    if (!field && name !== "areas_to_improve") {
      setErrors((errors) => {
        return { ...errors, [name]: true };
      });
        success = false;
    } else {
        setErrors((errors) => {
          return { ...errors, [name]: false };
        });
        success = true;
    }
  }
    
  return success;
}

export default validator
