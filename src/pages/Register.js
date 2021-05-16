import React, { useState } from 'react';
import styled from 'styled-components';
import Finance from '../assets/Finance.svg';
import Growing from '../assets/Growing-bro.svg';
import { auth } from '../components/api/firebase';
import db from '../components/api/firebase';
import _ from 'lodash';
import { setAuthorization } from '../helpers';

const Register = ({history}) => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dukaName: '',
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  // create user function
  const registerUser = (userObj) => {
    let token, userId;
    auth
      .createUserWithEmailAndPassword(userObj.email, userObj.password)
      .then(({ user }) => {
        userId = user.uid;
        return user.getIdToken();
      })
      .then((authToken) => {
        token = authToken;
        setAuthorization(token);
        
        db.collection('users').doc(userId).set({
          name: register.name,
          email: register.email,
          dukaName: register.dukaName,
          phoneNumber: register.phoneNumber,
        });
      })
      .catch(err => console.log(err))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // generate random four digit code,
    // Will be saved as the users password
    // Convert the generated random number to a string
    const pass = Math.random().toString();

    // Slice the string to only remain with four digits
    const newPass = pass.split('.')[1].slice(0, 6);

    // add the password to the registrant object
    let registrant = {
      ...register,
      password: newPass,
    };

    // call function to register user
    registerUser(registrant);

    // reset the registrant state
    setRegister({
      name: '',
      email: '',
      phoneNumber: '',
      dukaName: '',
    });

    // redirect to dahsboard
    history.push('/')
  };

  return (
    <Container>
      <Section>
        <CardWrapper>
          <h4 style={{ fontFamily: 'Abril Fatface', fontSize: '1.2rem' }}>DUKA.</h4>
          <h3>Sign Up</h3>
          <p>Please fill in the form below</p>

          {/* form group */}
          <FormGroup>
            <Input
              placeholder='What is your name'
              name='name'
              value={register.name}
              onChange={handleChange}
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder='What is your email address'
              name='email'
              value={register.email}
              onChange={handleChange}
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder='What is your mobile number'
              name='phoneNumber'
              value={register.phoneNumber}
              onChange={handleChange}
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder='What is your duka name'
              name='dukaName'
              value={register.dukaName}
              onChange={handleChange}
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup>
            <Submit type='submit' onClick={handleSubmit} />
          </FormGroup>
        </CardWrapper>
        <Background>
          <h3>
            Let's help you track your <br /> retail{' '}
            <em style={{ color: '#a1ef7a' }}>business</em>
          </h3>
          <Image src={Finance} />
          <SmallImage src={Growing} />
        </Background>
      </Section>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  background: #f5f3f4;
  height: 100vh;
`;
const Section = styled.div`
  display: flex;
`;
const Background = styled.div`
  background: #003049;
  border: 1px solid #111;
  flex: 7;
  height: 100vh;

  > h3 {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-left: 2rem;
    color: #fff;
  }
`;

const CardWrapper = styled.div`
  flex: 5;
  width: 500px;
  height: 450px;
  border-radius: 8px;
  color: #111;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h4 {
    margin-top: 1rem;
    margin-left: 1.5rem;
  }

  > h3 {
    margin-bottom: 1rem;
    font-size: 2em;
    margin-top: 3.5rem;
    margin-left: 1.5rem;
  }

  > p {
    margin-bottom: 1rem;
    margin-left: 1.5rem;
  }
`;

const FormGroup = styled.div`
  /* border: 1px solid #fff; */
  border-radius: 4px;
  padding: 0 0.5rem;
  margin: 0.8rem 0;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 350px;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 48, 73, 4);

  &::placeholder {
    color: #83838390;
    font-size: 1.05rem;
  }
`;

const Submit = styled.input`
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  width: 250px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  transition: all ease 0.6s;
  background: #a1ef7a;

  &:hover {
    transition: all ease 0.6s;
    background: #a1ef7a;
    /* color: #fff; */
  }
`;

const Image = styled.img`
  width: 430px;
  height: 430px;
  position: relative;
  left: 10rem;
`;
const SmallImage = styled.img`
  width: 230px;
  height: 230px;
  position: relative;
  left: 5rem;
  top: -320px;
`;
