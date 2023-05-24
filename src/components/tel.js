import { FormControl } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";

export default function Telephone({ update, details }) {
  const [value, setValue] = useState("");
  const obj = details;
  const handleChange = (number) => {
    setValue(number);
    update(obj.name, number);
  };

  return (
    <FormControl fullWidth >
      <MuiTelInput
        defaultCountry="NP"
        focusOnSelectCountry
        forceCallingCode
        preferredCountries={['NP', 'IN']}

        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
}
