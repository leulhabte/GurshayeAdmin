import React, {useState, useEffect} from 'react';
import Drawer from './Partials/Drawer/Drawer';
import useStyles from './AppStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './Components/DashBoard/DashBoard';
import ManagePrediction from './Components/ManagePrediction/ManagePrediction';
import InsertPrediction from './Components/InsertPrediction/InsertPrediction';
import ViewPrediction from './Components/ViewPrediction/ViewPrediction';
import Login from './Components/Login/Login';
import axios from 'axios';

function App() {
  const classes = useStyles();
  const [data, setData] = useState({})
  return (
    <BrowserRouter>
      <div className = {classes.root}>
        <Drawer />
        <div className={classes.content}>
          <div className={classes.toolbar}/>
          <Switch>
            <Route path = "/" exact component = {DashBoard}/>
            <Route path = "/manage" component = {ManagePrediction}/>
            <Route path = "/view" component = {ViewPrediction}/>
            <Route path = "/insert" component = {InsertPrediction}/>
            <Route path = "/logout" component = {Login}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
