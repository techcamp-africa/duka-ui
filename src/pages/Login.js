import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import db, { auth } from '../components/api/firebase'
import { setAuthorization } from '../helpers';


const Login = ({history}) => {

    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    })

    const handleSignInChange = e => {
        setSignIn({...signIn, [e.target.name]: e.target.value})
    }

    const handleSignInSubmit = e => {
        e.preventDefault()
        console.log("credentials", signIn)

        // sign in with firebase authentication
        auth.signInWithEmailAndPassword(signIn.email, signIn.password).then(res => {
            return res.user.getIdToken()
        })
        .then(token => {
            setAuthorization(token)
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Header>
                <h4 style={{ fontFamily: 'Abril Fatface', fontSize: '1.5rem'}}>DUKA.</h4>
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/register">Create a Duka Account</Link>
            </Header>
            <Card>
                <h1>Sign In</h1>
                <FormGroup>
                    <label style={{display: 'block', marginBottom: '.4rem', fontSize: '.9rem'}}>Email address</label>
                    <input type="text" placeholder="Enter your email" name="email" value={signIn.email} onChange={handleSignInChange}/>
                </FormGroup>
                <FormGroup>
                    <label style={{display: 'block', marginBottom: '.4rem', fontSize: '.9rem'}}>Password</label>
                    <input type="password" placeholder="Enter your password" name="password" value={signIn.password} onChange={handleSignInChange}/>
                </FormGroup>
                <FormGroup>
                    <button type="submit" onClick={handleSignInSubmit}>Sign In</button>
                    <Link style={{display: 'block', textAlign: 'center', fontSize: '.8rem', marginTop: '.8rem'}}>forgot password?</Link>
                </FormGroup>
            </Card>
        </div>
    )
}

export default Login

const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid #83838360;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 3rem;
    background: #003049;
    color: #fff;

    > p {
        font-size: .9rem;
        font-weight: 600;
    }
`
const Wrapper = styled.div`
`
const Card = styled.div`
    width: 300px;
    height: 60vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    > h1 {
        margin-bottom: 1rem;
    }
`
const FormGroup = styled.div`
    padding: .4rem 0;

    > input {
        padding: .4rem .8rem;
        border: 1px solid #838383;
        border-radius: 4px;
        outline: none;

        &::placeholder {
            color: #83838390;
        }
    }

    > button {
        padding: .3rem .8rem;
        width: 190px;
        background: #a1ef7a;
        border: none;
        outline: none;
        font-weight: 700;
        border-radius: 4px;
        /* color: #fff; */
    }
`