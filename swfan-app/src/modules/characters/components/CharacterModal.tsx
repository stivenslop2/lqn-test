import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { CharacterPage } from '../pages/CharacterPage';


export const CharacterModal = () => {

    const { characterId } = useParams();
  

    return (
        <>
            {
                ( characterId ) && <Modal show={ true } style={{ fontSize: '16px' }}>
                    <CharacterPage characterId={ characterId }/>
                </Modal>
            }
        </>
    );

}
