import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "80px" })}
`

const Wrapper = styled.div`
    padding: 10px, 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "5px 0px" })}
    ${mobile({ justifyContent: "center" })}
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 15px;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    padding: 5px;

    ${mobile({ fontSize: "10px", marginLeft: "0px" })}
    
`

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)

    console.log(quantity)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/> 
                    <Search style={{color:"gray", fontSize:16}} /> 
                </SearchContainer>
            </Left>
            <Center>
                <Logo>ASTRAL MONK</Logo>
            </Center>
            <Right>
                <Link to="/register">
                <MenuItem>Register</MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem>Log In</MenuItem>
                </Link>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar