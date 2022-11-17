import React, { useState, useContext } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import {AccountCircle, Key} from "@mui/icons-material";
import {authActions} from './actions';
import AppContext from "../../routes/AppContext";

const Account: React.FC = () => {
  const { loggedIn } = useContext(AppContext);
  const [userData, setUserData] = useState({email: '', password: ''})
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const handleLogin = () => {
    authActions.login(userData);
  }

  const handleLogout = () => {
    authActions.logout();
  }

  return (
    <Box sx={{ flexGrow: 1 }} marginTop={'20px'}>
      {
        !loggedIn && <FormControl>
          <Grid container>
            <Grid container item justifyContent={'center'}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="email@example.com"
                variant="standard"
                style={{padding: '2px !important'}}
                value={userData.email}
              />
            </Grid>
            <Grid container item justifyContent={'center'}>
              <Key sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                onChange={handleChange}
                name="password"
                id="password"
                type="password"
                variant="standard"
                style={{padding: '2px !important'}}
                value={userData.password}
              />
            </Grid>
            <Grid container item justifyContent={'center'}>
              <Button onClick={handleLogin}>login</Button>
            </Grid>
          </Grid>
        </FormControl>
      }
      {
        loggedIn &&
        <FormControl>
          <Grid container>
            <Grid container item justifyContent={'center'}>
              <Button onClick={handleLogout}>logout</Button>
            </Grid>
          </Grid>
        </FormControl>
      }
    </Box>
  )
}

export default Account;
