import styled from "styled-components";
import { IArtistCardProps } from "../../interfaces/intefaces";

export const ArtistCardContainer = styled.div<IArtistCardProps>`
	display:flex;
	flex-direction:column;
	align-items:center;
	height: 35rem;
	width: 31rem;
	background-color: #27E5A5;
	border-radius: 3rem;
	justify-content:space-evenly;
	margin: 2rem 2rem;
	// background-color:${props => props.backgroundColor};
	img{
		width:100%;
		border-radius: 3rem;
	}
`