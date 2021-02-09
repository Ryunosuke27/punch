import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import orange from '@material-ui/core/colors/orange';

//ボタンの色を定義
const theme = createMuiTheme({
    palette: {
      primary: orange,
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    textAlign:'center',
    position:'absolute',
    bottom:0
  },
}));
export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
    <div className = "footer">
      <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <div className="copy-right">
                Copyright © 2021 Ryunosuke Hayashi Inc. All Rights Reserved.
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      </div>
    </div>
    );
  }