import { FormControl } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Telephone({ update, details, telvalue }) {
  const [value, setValue] = useState("");
  const reset=useSelector(state=>state.resetter.reset)
useEffect(() => {
    if(reset===true)
    setValue("")
    
  }, [reset])


  const obj = details;
  const handleChange = (number) => {
    setValue(number);
    update(obj.name, number);

    console.log(number);
  };

  return (
    <FormControl fullWidth>
      <MuiTelInput
        defaultCountry="NP"
        focusOnSelectCountry
        forceCallingCode
        preferredCountries={["NP", "IN"]}
        disableFormatting
        value={value}
        onChange={handleChange}
        inputProps={{
          pattern: "[9]{1}[0-9]{9}",
          required:obj.memberQueue===true&&"required"
        }}
      />
    </FormControl>
  );
}
