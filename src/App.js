import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Slider,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./App.css";
import { useState } from "react";
import marks from "./data";

function App() {
  const [isNumberFocus, setIsNumberFocus] = useState(false);
  const [isPhoneNumberFocus, setIsPhoneNumberFocus] = useState(false);
  const [isMonyFocus, setIsMonyFocus] = useState(false);
  function valuetext(value) {
    return value;
  }
  return (
    <Container maxWidth="lg" className="container">
      <Box
        m="1rem"
        height="4rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="60rem"
      >
        <Typography component="h1" variant="h4" fontWeight="bolder">
          Registration
        </Typography>

        <Box
          p=".5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bgcolor="#f3f3f3"
            height=".5rem"
            width="2rem"
            borderRadius="1rem"
            marginRight=".3rem"
          ></Box>
          <Box
            bgcolor="#FFD742"
            height=".5rem"
            width="2rem"
            borderRadius="1rem"
            marginRight=".3rem"
          ></Box>
          <Box
            bgcolor="#f3f3f3"
            height=".5rem"
            width="2rem"
            borderRadius="1rem"
          ></Box>
        </Box>
      </Box>
      <Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Text/Number input
          </Typography>
          <Box className="box-input-container" border="1px solid #f3f3f3">
            {isNumberFocus && (
              <Typography className="label" bgcolor="#f3f3f3">
                CR Number
              </Typography>
            )}
            <input
              className="input"
              placeholder="CR Number"
              onFocus={() => setIsNumberFocus(true)}
              onBlur={() => setIsNumberFocus(false)}
            />
          </Box>
        </Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Phone Number
          </Typography>
          <Box className="box-input-container" border="1px solid #f3f3f3">
            {isPhoneNumberFocus && (
              <Typography className="label" bgcolor="#f3f3f3">
                Phone Number
              </Typography>
            )}
            <Box className="input-span-container">
              <span>+966</span>
              <input
                className="input"
                placeholder="Phone Number"
                onFocus={() => setIsPhoneNumberFocus(true)}
                onBlur={() => setIsPhoneNumberFocus(false)}
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Money input
          </Typography>
          <Box className="box-input-container" border="1px solid #f3f3f3">
            {isMonyFocus && (
              <Typography className="label" bgcolor="#f3f3f3">
                What is the estimated cost?
              </Typography>
            )}
            <Box className="span-input-container">
              <input
                className="input"
                placeholder="What is the estimated cost?"
                onFocus={() => setIsMonyFocus(true)}
                onBlur={() => setIsMonyFocus(false)}
              />
              <span>SAR</span>
            </Box>
          </Box>
        </Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Slider
          </Typography>
          <Box className="box-input-container">
            <Typography className="label">
              Is there any payment delay ?
            </Typography>
            <Box className="span-input-container">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  step={20}
                  // valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Date of birth
          </Typography>
          <Box className="box-input-container" border="1px solid #f3f3f3">
            <Typography className="label" bgcolor="#f3f3f3">
              Date of birth
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Box>
        </Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Checkbox
          </Typography>
          <Box className="box-input-container">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree receive Business Communications from bildnw"
            />
          </Box>
        </Box>
        <Box
          mt="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Typography component="h4" variant="h6" fontWeight="500">
            Button
          </Typography>
          <Box className="box-input-container">
            <Button
              fullWidth
              variant="contained"
              style={{
                height: "3rem",
                backgroundColor: "#FFD742",
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
