import styled from "styled-components";
import { ISearchBarProps } from "../../interfaces/intefaces";

export const SearchBarMainContainer = styled.div<ISearchBarProps>`
    input{
        background-color: #000000;
        border-radius: 1.2rem;
        border: 2px solid white;
        width:${props => props.width}rem;
        height:${props => props.height}rem;
        color: white;
        font-size: 1rem;
        padding-left: 2rem;
    }

    input::placeholder{
        color: white;
        font-size: 1rem;
    }

    @media (max-width: 375px) { 
        input{
            width:20rem;
            height:${props => props.height}rem;
        }
    }

    @media (max-width: 425px) { 
        input{
            width:24rem;
            height:${props => props.height}rem;
        }
    }
`