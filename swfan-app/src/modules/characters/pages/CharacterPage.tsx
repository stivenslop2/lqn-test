import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { FilmCard } from '../components/FilmCard';
import { Film } from '../models/film';


const GET_CHARACTERS = gql`
query getPersona($characterId: ID!){
        person(id: $characterId) {
            id
            name
            birthYear
            eyeColor
            gender
            hairColor
            height
            mass
            skinColor
            filmConnection {
              films {
                id
                title
                episodeID
                director
                planetConnection{
                  planets{
                    id
                    name           
                  }
                }
              }
            }
          }
}
`

export const CharacterPage = ( { characterId }: any ) => {

    const { data, loading } = useQuery(GET_CHARACTERS, {
        variables: { characterId }
    });


    if (loading) return <CircularProgress color="primary" />
    const { person } = data;


    const {
        name,
        birthYear,
        eyeColor,
        gender,
        hairColor,
        height,
        mass,
        skinColor,
        filmConnection: { films }
    } = person;


    return (
        <div className="row m-5">
            <div className="col-12 animate__animated animate__fadeIn ">
                <div className='row'>
                    <Chip className='mb-5' label={name} color="primary" />
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center'>Character details</h3>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> <b><Chip label="Birth year" variant="outlined" /></b> {birthYear} </li>
                                        <li className="list-group-item"> <b><Chip label="Eye color" variant="outlined" /></b> {eyeColor} </li>
                                        <li className="list-group-item"> <b><Chip label="Gender" variant="outlined" /></b> {gender} </li>
                                        <li className="list-group-item"> <b><Chip label="Hair color" variant="outlined" /></b> {hairColor} </li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> <b><Chip label="Height" variant="outlined" /></b> {height} </li>
                                        <li className="list-group-item"> <b><Chip label="Mass (kg)" variant="outlined" /></b> {mass} </li>
                                        <li className="list-group-item"> <b><Chip label="Skin color" variant="outlined" /></b> {skinColor} </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center'>Films</h3>
                            <div className="character-films-container">
                                <div className="character-page__film-item">
                                    {
                                        films.map((film: Film) => (
                                            <FilmCard
                                                key={film.id}
                                                {...film}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={`/list-characters`}>
                    <Button size="small" className='mt-5' variant="outlined">
                        Close
                    </Button>
                </Link>
            </div>
        </div>
    )
}
