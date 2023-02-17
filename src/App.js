import React, { useState } from "react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Slider,
} from "@mui/material/";

function App() {
  const [frontGear, setFrontGear] = useState(0);
  const [rearGear, setRearGear] = useState(0);
  const [cadance, setCadance] = useState(0);
  const [tireCircumfence, setTireCircumference] = useState(0);
  const [resultskph, setResultskph] = useState(0);
  const [resultsmph, setResultsmph] = useState(0);

  const handleChangeFront = (event) => {
    console.log("Front Gear", event.target.value);
    setFrontGear(event.target.value);
  };

  const handleChangeRear = (event) => {
    console.log("Rear Gear", event.target.value);
    setRearGear(event.target.value);
  };

  const handleChangeCadance = (event) => {
    console.log("Cadance", event.target.value);
    setCadance(event.target.value);
  };

  const handleChangeTire = (event) => {
    console.log("Tire Circum", event.target.value);
    setTireCircumference(event.target.value);
  };

  const submitHandler = () => {
    console.log(
      "Submit Handler",
      frontGear,
      rearGear,
      cadance,
      tireCircumfence
    );
    const gearRatio = frontGear / rearGear;
    console.log("Gear Ratio", gearRatio);
    setResultskph(
      (0.0000373 * tireCircumfence * gearRatio * cadance).toFixed(2)
    );
    setResultsmph(
      (
        0.0000373 *
        tireCircumfence *
        gearRatio *
        cadance *
        0.6213711922
      ).toFixed(2)
    );
  };

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="primary"
        sx={{
          top: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography variant="4" component="h4" sx={{ width: "100%" }}>
              Cycling Speed
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ minWidth: 120, marginTop: 10 }}>
        <FormControl fullWidth>
          <InputLabel id="Front_gear">Front Gear</InputLabel>
          <Select
            labelId="Front_gear"
            id="Front_gear"
            defaultValue="42"
            label="Front Gear"
            onChange={handleChangeFront}
          >
            <MenuItem value={42}>42T</MenuItem>
            <MenuItem value={43}>43T</MenuItem>
            <MenuItem value={44}>44T</MenuItem>
            <MenuItem value={45}>45T</MenuItem>
            <MenuItem value={46}>46T</MenuItem>
            <MenuItem value={47}>47T</MenuItem>
            <MenuItem value={48}>48T</MenuItem>
            <MenuItem value={49}>49T</MenuItem>
            <MenuItem value={50}>50T</MenuItem>
            <MenuItem value={51}>51T</MenuItem>
            <MenuItem value={52}>52T</MenuItem>
            <MenuItem value={53}>53T</MenuItem>
            <MenuItem value={54}>54T</MenuItem>
            <MenuItem value={55}>55T</MenuItem>
            <MenuItem value={56}>56T</MenuItem>
            <MenuItem value={57}>57T</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="Rear_gear">Rear Gear</InputLabel>
          <Select
            labelId="Rear_gear"
            id="Rear_gear"
            defaultValue="12"
            label="Rear Gear"
            onChange={handleChangeRear}
          >
            <MenuItem value={12}>12T</MenuItem>
            <MenuItem value={13}>13T</MenuItem>
            <MenuItem value={14}>14T</MenuItem>
            <MenuItem value={15}>15T</MenuItem>
            <MenuItem value={16}>16T</MenuItem>
            <MenuItem value={17}>17T</MenuItem>
            <MenuItem value={18}>18T</MenuItem>
            <MenuItem value={19}>19T</MenuItem>
            <MenuItem value={20}>20T</MenuItem>
            <MenuItem value={21}>21T</MenuItem>
            <MenuItem value={22}>22T</MenuItem>
            <MenuItem value={23}>23T</MenuItem>
            <MenuItem value={24}>24T</MenuItem>
            <MenuItem value={25}>25T</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="Cadance">Cadance</InputLabel>
          <Slider
            sx={{ marginTop: 5, width: "100%", height: 20 }}
            aria-label="Always visible"
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            defaultValue={80}
            step={1}
            onChange={handleChangeCadance}
            min={40}
            max={120}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="wheel_size">Wheel Size</InputLabel>
          <Select
            labelId="wheel_size"
            id="wheel_size"
            defaultValue="2070"
            label="Wheel Size"
            onChange={handleChangeTire}
          >
            <MenuItem value={2070}>700 x 18C</MenuItem>
            <MenuItem value={2080}>700 x 19C</MenuItem>
            <MenuItem value={2086}>700 x 20C</MenuItem>
            <MenuItem value={2096}>700 x 23C</MenuItem>
            <MenuItem value={2015}>700 x 25C</MenuItem>
            <MenuItem value={2130}>700C Tubular</MenuItem>
            <MenuItem value={2136}>700 x 28C</MenuItem>
            <MenuItem value={2146}>700 x 30C</MenuItem>
            <MenuItem value={2155}>700 x 32C</MenuItem>
            <MenuItem value={2168}>700 x 35C</MenuItem>
            <MenuItem value={2180}>700 x 38C</MenuItem>
            <MenuItem value={2200}>700 x 40C</MenuItem>
            <MenuItem value={2235}>700 x 44C</MenuItem>
            <MenuItem value={2242}>700 x 45C</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Toolbar>
          <Button
            variant="contained"
            sx={{ bgcolor: "black" }}
            onClick={submitHandler}
          >
            Submit
          </Button>
          <Box sx={{ marginLeft: 10 }}>{resultskph} kph</Box>
          <Box sx={{ marginLeft: 10 }}>{resultsmph} mph</Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
