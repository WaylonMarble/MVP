import { useState, useEffect } from 'react'
import { Container, ButtonGroup, Button, Stack, Box, Modal, Typography, TextField, Select, MenuItem, InputLabel} from '@mui/material/';
import styled from '@emotion/styled'
import './App.css'

const NewButton = styled.button`
  background-color: ;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PumpForm(props) {

  const [side, setSide] = useState('left');
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState('oz');
  const [between, setBetween] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Pumped for ${seconds} seconds on ${side} side yielding ${amount} ${unit}`);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
        <Modal
        open={props.open}
        onClose={props.onSetOpen}
        aria-labelledby="modal-live-feed"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <div>
          <InputLabel id="pumping-side-select-label">Pumping Side</InputLabel>
          <Select
              labelId="pumping-side-select-label"
              id="demo-simple-select"
              value={side}
              label="Pumping Side"
              onChange={(event)=>{setSide(event.target.value)}}
            >
              <MenuItem value={'left'}>Right</MenuItem>
              <MenuItem value={'right'}>Left</MenuItem>
              <MenuItem value={'both'}>Both</MenuItem>
          </Select>
            <TextField
              required
              id="outlined-required"
              label="Current Date/Time"
              value={new Date().toLocaleString()}
              margin="normal"
            />
            <TextField
              onChange={(event)=>{setAmount(event.target.value)}}
              required
              id="outlined-required"
              label="Amount Pumped"
              value={amount}
              margin="normal"
            />
            <InputLabel id="pumping-unit-select-label">Pumping Units</InputLabel>
            <Select
              labelId="pumping-unit-select-label"
              id="demo-simple-select"
              value={unit}
              label="Amount"
              onChange={(event)=>{setUnit(event.target.value)}}
            >
              <MenuItem value={'ml'}>ML</MenuItem>
              <MenuItem value={'oz'}>Ounces</MenuItem>
            </Select>
            <TextField
              onChange={(event)=>{setSeconds(event.target.value)}}
              required
              id="outlined-required"
              label="Duration In Seconds"
              value={seconds}
              margin="normal"
            />
            <NewButton type="button" onClick={toggle}>{isActive ? "Stop Timer" : "Start Timer"}</NewButton>
            <NewButton type="button" onClick={reset}>&#8617;</NewButton>
            <NewButton type="submit" onClick={handleSubmit}>Submit</NewButton>
          </div>
        </Box>
      </Modal>
  )
}

export default PumpForm
