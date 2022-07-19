import styled from 'styled-components'

export const MainViewComponent = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #000000;
	width: 100%;
	height: 100vh;
	.header{
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		background-color: #000000;
		padding: 4rem 4rem 2rem 4rem;
		z-index:7;
	}
	.cards-container{
		padding: 4rem 4rem 2rem 4rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`