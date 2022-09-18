import React from 'react'
import {useAppContext} from './AppContext'
import App from './App'
import Cert from './Cert'

function Route() {
    const { page } = useAppContext();
    
    switch (page) {
        case "Form":
            return <App />
        case "Cert":
            return <Cert />
        default:
            return <App />
  }
}

    export default Route;