import { useDispatch } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import {mobile} from "../responsive"
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(225,225,225,0.5),
        rgba(225,225,225,0.5)),
     url(https://images3.alphacoders.com/438/43865.jpg) center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({ width: '80%' })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: teal;
        cursor: not-allowed;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e)=> {
        e.preventDefault();
        login(dispatch,{username,password});
    };
  return (
    <Container>
                <Wrapper>
            <Title>Return to Me</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>Prove Yourself</Button>
                {error && <Error>You are not worthy</Error>}
                <Link>Have you strayed from the path</Link>
                <Link>Be Reborn</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login