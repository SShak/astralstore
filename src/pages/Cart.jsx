import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import {mobile} from "../responsive"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;

    ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled"  && "none"};
    background-color: ${props=>props.type === "filled"  ? "black" : "transparent"};
    color: ${props=>props.type === "filled"  && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: 'column' })}
`  

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`  

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props=>props.color};
` 

const ProductName = styled.span`

`  

const ProductId = styled.span`

` 

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
` 

const ProductSize = styled.span`

` 

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
` 

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
` 

const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;

    ${mobile({ margin: '5px 15px' })}
` 

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;

    ${mobile({ marginBottom: '20px' })}
` 

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
` 

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" &&  "500"};
    font-size: ${props=>props.type === "total" &&  "24px"};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container> 
        <Announcement/> 
        <Navbar/>
        <Wrapper>
            <Title>Your Inner Self</Title>
            <Top>
                <TopButton>Gather more knowlege</TopButton>
                <TopTexts>
                    <TopText>Unbridled Need (2)</TopText>
                    <TopText>Unquenched Lust (0)</TopText>
                </TopTexts>
                <TopButton type="filled">Manifest</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://craft-mart.com/wp-content/uploads/2017/10/acrylic-pouring-featured-1.jpg"/>
                            <Details>
                                <ProductName><b>Product: </b>Forever Unfolding Self Image</ProductName>
                                <ProductId><b>ID: </b>209384760934867</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b>40x30</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 4,000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://craft-mart.com/wp-content/uploads/2017/10/acrylic-pouring-featured-1.jpg"/>
                            <Details>
                                <ProductName><b>Product: </b>Forever Unfolding Self Image</ProductName>
                                <ProductId><b>ID: </b>209384760934867</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b>40x30</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 4,000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>All that is you</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Essence</SummaryItemText>
                        <SummaryItemPrice>$ 8,000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>To Hold Near</SummaryItemText>
                        <SummaryItemPrice>$ 500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>I am a kind God</SummaryItemText>
                        <SummaryItemPrice>$ -500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>In the end</SummaryItemText>
                        <SummaryItemPrice>$ 8,000</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Sign the contract</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart