import React from "react"
import {Redirect, Route} from "react-router-dom"

const AuthRoute = ({component: Component, ...rest}) => {

    const token = localStorage.getItem('duka-token')
    return (
        <Route
            {...rest}
            render={props => !token ? <Redirect to='/login'/> : <Component {...props}/>}
        />
    )
}

export default AuthRoute