import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRef } from "react";
import { useSelector } from "react-redux";
export default function BasicSelect({ details, update }) {
  const [option, setoption] = React.useState("");
  const obj = details;
const reset=useSelector(state=>state.resetter.reset)
  const handleChange = (event) => {
    setoption(event.target.value);
    update(obj.name, event.target.value);
  };
React.useEffect(() => {
  if(reset===true)
  setoption("")
  
}, [reset])


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{obj.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={obj.title}
          onChange={(e) => {
            handleChange(e);
          }}
          required={
            obj.memberQueue === 1 || obj.memberQueue === 2 ? true : false
          }
        >
          {obj.options.map((element) => {
            return (
              <MenuItem value={element} key={element}>
                {element}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
