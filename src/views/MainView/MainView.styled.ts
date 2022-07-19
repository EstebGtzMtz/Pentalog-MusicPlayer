import styled from 'styled-components'

export const MainViewComponent = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #000000;
	width: 100%;
	height: 100vh;
	.header{
		padding: 4rem 4rem 2rem 4rem;
	}
	.cards-container{
		padding: 4rem 4rem 2rem 4rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`