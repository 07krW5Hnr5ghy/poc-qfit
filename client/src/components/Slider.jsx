import styled from "styled-components";
import {ArrowLeftIcon,ArrowRigthIcon} from '@mui/icons-material/ArrowLeft';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftIcon/>
        </Arrow>
        <Arrow>
            <ArrowRigthIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider