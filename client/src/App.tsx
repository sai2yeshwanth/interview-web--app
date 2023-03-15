import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from 'react';
import SignUpPage from './components/SignUp';
import { Box } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <BrowserRouter>
        <Fragment>
          <Routes>
          <Route path='/' element = {<SignUpPage />} />
          </Routes>
        </Fragment>

      </BrowserRouter>

    </Box>
  )
}

export default App
