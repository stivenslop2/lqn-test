import { Link } from 'react-router-dom'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Character } from '../models/character';

export const CharactersCard = ( character: Character ) => {

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card primary-background">
                <div className="row no-gutters">
                    <div className="col-12">

                        <div className="card-body">
                            <Chip label={ character.name } color="primary" />
                            <hr />

                            <p className="mt-4">Details</p>
                            <p className="card-text">
                                <small className="text-muted">Birth Year: { character.birthYear }</small>
                                <br />
                                <small className="text-muted">Height: { character.height }</small>
                                <br />
                                <small className="text-muted">Homeworld: { character.homeworld.name }</small>
                            </p>

                            <Link to={`/list-characters/${ character.id }`}>
                                <Button size="small" className='w-100' variant="outlined" onClick={ character.handleOpen }>
                                    More...
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
