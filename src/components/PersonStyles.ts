import styled from "styled-components";
import sizes from "../sizes";

export const Wrapper = styled.div`
    margin: 0 5vw 30px;
    ${[sizes.up("lg")]} {
        margin: 0 12vw 30px;
    }
`;

export const Heading = styled.h1`
    font-size: 28px;
    font-weight: 400;
`;

export const Row = styled.div`
    height: 75px;
    display: flex;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Placeholder = styled.div`
    width: 50px;
    height: 75px;
    user-drag: none;
    user-select: none;
    position: relative;
    background: #101010;
`;

export const Img = styled.img`
    width: 50px;
    height: 75px;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Span = styled.span`
    width: 80%;
    display: flex;
    margin: 0 20px;
    align-items: center;
`;
export const Bio = styled.span`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 990px) {
        flex-direction: column;
    }
`;

export const Info = styled.p`
    width: 60%;
    font-size: 15px;
    @media (max-width: 990px) {
        width: 100%;
        font-size: 12px;
    }
`;
