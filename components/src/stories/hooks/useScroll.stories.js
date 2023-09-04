import styled from "@emotion/styled";

export default {
    title: 'Hook/useScroll'
}

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: #aaa;
    overflow: auto;
`;

const Inner = styled.div`
    width: 1000px;
    height: 1000px;
    background-image: linear-gradient(white, black);
`;

export const Default = () => {
    const [ref, coord] = useScroll(); //스크롤 위치 추적

    return(
        <>
            <Box>
                <Inner />
            </Box>
            {coord.x}, {coord.y}
        </>
    )
}