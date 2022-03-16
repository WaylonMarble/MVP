import { useState, useEffect } from 'react'
import { Container, ButtonGroup, Button, Stack, Box, Modal, Typography, TextField} from '@mui/material/';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, NavLink } from "react-router-dom";
import styled from '@emotion/styled'
import axios from 'axios';

const NewButton = styled.button`
  background-color: ;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }`

function Freezer() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(['']);

  useEffect(() => {
    axios.get("/api/pump/freezer")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <>
    <NavLink className="nav-link" to="/">
      <NewButton>Home</NewButton>
    </NavLink>
    <h4>Feezer</h4>
    {isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <TableContainer component={Paper} sx={{justifyContent: 'center', margin: '5px', width: '97vw', justifySelf: 'center'}}>
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{fontWeight: 'bold', fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}}>Date/Time Of Pumping</TableCell>
          <TableCell sx={{fontWeight: 'bold', fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}} align="right">Side Pumped On</TableCell>
          <TableCell sx={{fontWeight: 'bold', fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}} align="right">Amount Pumped</TableCell>
          <TableCell sx={{fontWeight: 'bold', fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}} align="right">Units</TableCell>
          <TableCell sx={{fontWeight: 'bold', fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}} align="right">Duration (seconds)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.time_pumped}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}}>
              {row.time_pumped}
            </TableCell>
            <TableCell align="right" sx={{fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}}>{row.side}</TableCell>
            <TableCell align="right" sx={{fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}}>{row.amount}</TableCell>
            <TableCell align="right" sx={{fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}}>{row.units}</TableCell>
            <TableCell align="right" sx={{fontSize: 'clamp(.68rem, 2.5vw, 1rem)'}}>{row.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    )}
    </>
  )
}

export default Freezer