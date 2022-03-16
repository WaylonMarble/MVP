import { useState, useEffect } from 'react'
import { Container, ButtonGroup, Button, Stack, Box, Modal, Typography, TextField} from '@mui/material/';
import { Link, NavLink } from "react-router-dom";
import styled from '@emotion/styled'
import logo from './Baby-Biberon.svg'
import './App.css'
import LiveForm from './LiveForm'
import PumpForm from './PumpForm'

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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [liveOpen, setLiveOpen] = useState(false);
  const [pumpOpen, setPumpOpen] = useState(false);
  const handleLiveOpen = () => setLiveOpen(true);
  const handleLiveClose = () => setLiveOpen(false);
  const handlePumpOpen = () => setPumpOpen(true);
  const handlePumpClose = () => setPumpOpen(false);

  return (
    <Container className="App">
      <header className="App-header">
        <h4>Milk Maid</h4>
        <img src={logo} className="App-logo" alt="logo" />
        <Stack spacing={4}>
        <NewButton onClick={handleLiveOpen}>Record Live Feed</NewButton>
        <LiveForm open={liveOpen} onSetOpen={handleLiveClose}/>
        <NewButton onClick={handlePumpOpen}>Record Pumping Session</NewButton>
        <PumpForm open={pumpOpen} onSetOpen={handlePumpClose}/>
        <NavLink className="nav-link" to="/fridge">
          <NewButton>View Fridge</NewButton>
        </NavLink>
        <NavLink className="nav-link" to="/freezer">
          <NewButton>View Freezer</NewButton>
        </NavLink>
        <NavLink className="nav-link" to="/records">
          <NewButton>All Records</NewButton>
        </NavLink>
      </Stack>
      </header>
    </Container>
  )
}

export default App
