import { FunctionComponent } from 'react'
import { IArtistCardProps } from '../../interfaces/intefaces'
import { ArtistCardContainer } from './ArtistCard.styled'

const ArtistCardComponent:FunctionComponent<IArtistCardProps> = ({ name, img }: IArtistCardProps) => {
	return (
		<ArtistCardContainer>
			<h2>{name}</h2>
			<img src={img} alt="" />
		</ArtistCardContainer>
	)
}

export default ArtistCardComponent