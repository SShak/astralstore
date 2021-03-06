import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(225,225,225,0.5),
        rgba(225,225,225,0.5)),
     url(https://wallpaperaccess.com/full/39608.jpg) center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Combine to one</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating an account a person agrees that any and all disputes they have with the Astrals and its affiliates that cannot be resolved informally will be handled by an internal arbitration system. Under no circumstances will they or anyone acting on their behalf take any sort of legal action against the Ancients</Agreement>
                <Button>Ascend</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register