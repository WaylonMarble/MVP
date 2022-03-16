import { useState, useEffect } from 'react'
import { Container, ButtonGroup, Button, Stack, Box, Modal, Typography, TextField} from '@mui/material/';
import { Link, NavLink } from "react-router-dom";
import styled from '@emotion/styled'

const NewButton = styled.button`
  background-color: ;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }`

function Fridge() {
  return (
    <NavLink className="nav-link" to="/">
      <NewButton>Home</NewButton>
    </NavLink>
  )
}

export default Fridge