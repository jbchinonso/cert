import React from 'react'
import {useAppContext} from './AppContext'
import App from './App'
import Cert from './Cert'
import Signup from './Signup'
import {
  BrowserRouter as Router,
  Route as PageRoute,
  Routes,
} from "react-router-dom";
import Attendance from './Attendance'

function Route() {
    const { page } = useAppContext();
   
    switch (page) {
        // case "Form":
        //     return <App />
        case "Cert":
            return <Cert />
        default:
            return (
              <Router>
                <Routes>
                  <PageRoute exact path="/" element={<App />} />
                  <PageRoute exact path="/registration" element={<Signup />} />
                  <PageRoute exact path="/attendance" element={<Attendance/>} />
                </Routes>
              </Router>
            );;
  }
}

    export default Route;