import styled from "styled-components";
import { IArtistCardProps } from "../../interfaces/intefaces";

export const ArtistCardContainer = styled.div<IArtistCardProps>`
	.image-and-top-tracks{
		display: flex;
		flex-direction: row;
		.artist-card{
			display:flex;
			flex-direction:column;
			align-items:center;
			justify-content:space-between;
			height: 31rem;
			width: 22rem;
			border-radius: 3rem;
			border: 2px solid black;
			margin: 2rem 1rem;
			background-color:${props => props.backgroundColor};
			cursor:pointer;
			img{
				width:100%;
				border-radius: 3rem;
			}
		}
	}
	.artist-card-name-container{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		h2{
			color:white;
			font-family: system-ui;
			font-weight: normal;
		}
		.list-track{
			background-color: red;
		}
	}
	.artist-card:hover {
		border: 2px solid white;
	}
`