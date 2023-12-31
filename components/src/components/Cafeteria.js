import styled from '@emotion/styled';
import Progress from './Progress';

const Box = styled.div`
    width: 100%;
    padding: 30px;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 25px;
    margin-right: 10px;
`;

const Title = styled.h2`
    margin: 0;
`;

const Cafeteria = () => {
    return (
        <Box>
            <Logo src="/assets/images/Eyes.png" />
            <Progress  />
        </Box>
    );
}

export default Cafeteria;