import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height:60px;
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;



const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language =  styled.span`
    font-size:14;
    cursor:pointer;
`
const SearchContainer =  styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
`

const Center = styled.div`
    flex:1;
`
const Right =  styled.div`
    flex:1;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    input
                    <SearchIcon/>
                </SearchContainer>
            </Left>
            <Center>center</Center>
            <Right>right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;