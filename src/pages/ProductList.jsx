import styled from "styled-components"
import Navbar from "../component/Navbar"
import Announcement from "../component/Announcement"
import Products from "../component/Products"
import Newsletter from "../component/Newsletter"
import Footer from "../component/Footer"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
`
const Select = styled.select`
    padding: 10px;
    margin-left: 10px;

`
const Option = styled.option`
    
`

export const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Elightenment</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option disabled selected>Plane</Option>
                    <Option>Earth</Option>
                    <Option>Space</Option>
                    <Option>Dimentional</Option>
                    <Option>Water</Option>
                    <Option>Fire</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}
