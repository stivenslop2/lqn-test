import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Planet } from '../models/planet';
import { Film } from '../models/film';

export const FilmCard = (film: Film) => {

    const { planets } = film.planetConnection;

    return (
        <div className="col animate__animated animate__fadeIn mt-3">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-12">
                        <div className="card-body">
                            <Chip label={film.title} color="primary" />
                            <hr />

                            <p className="mt-4">Details</p>
                            <p className="card-text">
                                <small className="text-muted">Director: {film.director}</small>
                                <br />
                                <small className="text-muted">Episode ID: {film.episodeID}</small>
                            </p>


                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <p className='m-0 '>Planets
                                        <small className="text-muted">
                                            (+{planets.length})
                                        </small>
                                    </p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="card-text">
                                            {
                                                planets.map((planet: Planet) => (
                                                    <div key={planet.id}>
                                                        <small className="text-muted">{planet.name}</small>
                                                        <br />
                                                    </div>
                                                ))
                                            }                                       
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
