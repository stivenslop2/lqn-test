import { gql, useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import { CharactersCard } from './CharactersCard';
import { CharacterModal } from './CharacterModal';
import { Character } from '../models/character';

const GET_CHARACTERS = gql`
query {
  allPeople{
    people {
      id
      name
      birthYear
      gender
      hairColor
      height
      homeworld {
        name
      }
      species {
        name
      }
    }
  }
}
`

export const CharacterList = () => {

  const { data, loading } = useQuery(GET_CHARACTERS);
  if ( loading ) return <CircularProgress color="primary" />

  const { allPeople: { people: characters } } = data;

  return (
    <div className="row rows-cols-sm-1 row-cols-md-4 g-3 animate__animated animate__fadeIn primary-background">
      {
        characters.map((character: Character) => (
          <CharactersCard
            key={character.id}
            {...character}
          />
        ))
      }

      <CharacterModal />
    </div>
  )
}
