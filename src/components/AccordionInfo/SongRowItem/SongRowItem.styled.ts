import styled from "styled-components";

export const SongRowItemContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    border-bottom: 1px solid #32a1ce;
    padding:1rem 0;
    .title-song{
        width: 30%;
        font-family: system-ui;
		font-weight: normal;
        font-size: 1rem;
        color: white;
    }
    .link-to-spotify{
        cursor: pointer;
        h2{
            font-family: system-ui;
			font-weight: normal;
            font-size: 1rem;
            color: white;
        }
    }

    .link-to-spotify:hover{
        border-bottom: 1px solid white;
    }
`