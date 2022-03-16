import { useState, useEffect } from 'react'
import { Container, ButtonGroup, Button, Stack, Box, Modal, Typography, TextField} from '@mui/material/';
import styled from '@emotion/styled'
import './App.css'
import axios from 'axios';

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

function LiveForm(props) {

  const [name, setName] = useState('Baby Name');
  const [time, setTime] = useState(new Date().toLocaleString());
  const [side, setSide] = useState('Feeding Side');
  const [seconds, setSeconds] = useState(0);
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
    alert(`${name} ate on ${side} side for ${seconds} seconds`);
    axios.post('/api/live', {name: name, time: time, side: side, duration: seconds})
    .then(props.onSetOpen);
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
            <TextField
              onChange={(event)=>{setName(event.target.value)}}
              required
              id="outlined-required"
              label="Baby Name"
              value={name}
              margin="normal"
            />
            <TextField
              onChange={(event)=>{setTime(event.target.value)}}
              required
              id="outlined-required"
              label="Current Date/Time"
              value={new Date().toLocaleString()}
              margin="normal"
            />
            <TextField
              onChange={(event)=>{setSide(event.target.value)}}
              required
              id="outlined-required"
              label="Feeding Side"
              value={side}
              margin="normal"
            />
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

export default LiveForm
