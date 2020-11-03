import React, {useState, useEffect} from 'react';
import Drawer from './Partials/Drawer/Drawer';
import useStyles from './AppStyle';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DashBoard from './Components/DashBoard/DashBoard';
import ManagePrediction from './Components/ManagePrediction/ManagePrediction';
import InsertPrediction from './Components/InsertPrediction/InsertPrediction';
import ViewPrediction from './Components/ViewPrediction/ViewPrediction';
import SetIsCorrect from './Components/SetIsCorrect/SetIsCorrect';
import UpdatePrediction from './Components/ManagePrediction/UpdatePrediction/UpdatePrediction';
import Login from './Components/Login/Login';
import ChangeLogin from './Components/Login/ChangeProfile';
import Cookies from 'js-cookie';

function App() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);
  const handelUser = (name, token)=>{
      setAuth(false)
      setName(name)
      setToken(token)
      Cookies.set('jwt', token);
      Cookies.set('username', name);
      setAuth(true)
  }

  const handleLogout = ()=>{
    Cookies.remove('jwt');
    Cookies.remove('username');
    setAuth(false);
  }

  useEffect(()=>{
    readCookie()
  },[])

  const readCookie = ()=>{
    const token = Cookies.get('jwt')
    const user = Cookies.get('username')
    if(user && token) setAuth(true)
  }
  return (
    <BrowserRouter>
      <div className = {classes.root}>
        <Drawer handleLogout = {handleLogout} auth = {auth}/>
        <div className={classes.content}>
          <div className={classes.toolbar}/>
          <Switch>
            <ProtectedLogin path = "/" exact component={Login} handelUser = {handelUser} auth = {auth}/>
            <ProtectedRoutes path = "/home" component = {DashBoard} auth = {auth}/>
            <ProtectedRoutes path = "/manage" component = {ManagePrediction} auth = {auth}/>
            <ProtectedRoutes path = "/view" component = {ViewPrediction} auth = {auth}/>
            <ProtectedRoutes path = "/insert" component = {InsertPrediction} auth = {auth}/>
            <ProtectedRoutes path = "/update" component = {UpdatePrediction} auth = {auth}/>
            <ProtectedRoutes path = "/is_correct" component = {SetIsCorrect} auth = {auth}/>
            <ProtectedChangeProfile path = "/change" component = {ChangeLogin} handelUser = {handelUser} auth = {auth}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const ProtectedLogin = ({handelUser, auth, component: Component, ...rest})=>{
  return <Route
    {...rest}
    render = {(props)=> !auth ? (<Component handelUser={handelUser} {...props}/>):
      (<Redirect to='/home'/>)
  }
  />
}


const ProtectedChangeProfile = ({handelUser, auth, component: Component, ...rest})=>{
  return <Route
    {...rest}
    render = {(props)=> auth ? (<Component handelUser={handelUser} {...props}/>):
      (<Redirect to='/home'/>)
  }
  />
}

const ProtectedRoutes = ({auth, component: Component, ...rest})=>{
  return <Route
    {...rest}
    render = {(props)=> auth ? (<Component {...props}/>):
      (<Redirect to='/'/>)
  }
  />
}

export default App;
