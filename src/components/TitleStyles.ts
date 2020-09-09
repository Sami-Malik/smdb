import styled from "styled-components";
import sizes from "../sizes";

export const Container = styled.div`
    ${[sizes.up("md")]} {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const OuterDiv = styled.div`
    width: 100%;
    margin-top: auto;
    position: relative;
    ${[sizes.up("md")]} {
        top: 0;
        width: 1000px;
        height: 530px;
        margin-top: 85px;
        position: absolute;
        backdrop-filter: blur(5px);
        webkit-backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.8);
    }
`;

export const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    ${[sizes.up("md")]} {
        flex-direction: row;
    }
`;

export const Info = styled.div`
    margin: 0 4vw;
    padding: 5px;
    font-size: 15px;
    font-weight: lighter;
    font-family: sans-serif;
    ${[sizes.up("md")]} {
        margin-left: 15px;
        margin-right: 22px;
    }
`;

export const Heading = styled.h1`
    font-size: 23px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    ${[sizes.up("md")]} {
        padding-top: 20px;
        font-weight: 600;
    }
`;

export const Overview = styled.span`
    font-size: 0.9rem;
    line-height: 21px;
    display: block;
`;

export const Rating = styled.div`
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    background: #000;
    display: inline-flex;
    align-items: center;
`;

export const Imdb = styled.img`
    width: 50px;
`;

export const Rank = styled.span`
    margin-top: 3px;
    margin-left: 7px;
    font-size: 1.1rem;
`;

export const Star = styled.img`
    width: 30px;
`;

export const Row = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
`;

export const OuterSimRow = styled.div`
    margin-bottom: 20px;
`;

export const SimRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 990px) {
        margin-left: 20px;
    }
`;
export const ReleaseDate = styled.span`
    font-weight: 600;
    color: rgb(230, 185, 30);
`;
export const NotFound = styled.h1`
    display: grid;
    place-items: center;
    margin-top: 100px;
`;
