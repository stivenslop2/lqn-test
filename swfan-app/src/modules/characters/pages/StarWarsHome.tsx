import { CharacterList } from '../components/CharacterList'

export const StarWarsHome = () => {



    return (
        <div className='container mt-5'>
            <h1 className='star-wars-home__title'>Star Wars Characters</h1>
            <hr />

            <CharacterList />
        </div>
    )
}
