import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"
import {mobile} from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({ padding: '10px', flexDirection: "column" })}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: '40vh' })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;

    ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
    font-weight: 600;
    
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize= styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    ${mobile({ width: '100%' })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: coral;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/orange-and-purple-original-acrylic-pour-painting-david-ilzhoefer.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Plastocinetic Tirumbrance</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Pellentesque habitant morbi tristique senectus et netus. Et malesuada fames ac turpis egestas maecenas. Blandit libero volutpat sed cras ornare arcu dui. Elit ut aliquam purus sit amet luctus venenatis lectus. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Ut etiam sit amet nisl. Dictum fusce ut placerat orci nulla pellentesque. Odio eu feugiat pretium nibh ipsum. Faucibus nisl tincidunt eget nullam non nisi est. Et molestie ac feugiat sed lectus vestibulum.</Desc>
                <Price>$ 500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="Black"/>
                        <FilterColor color="Red"/>
                        <FilterColor color="Yellow"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO SOUL</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product