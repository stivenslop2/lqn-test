import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    React,
}
    from 'react-router-dom';
import { StarWarsHome } from '../modules/characters/pages/StarWarsHome';

const AppRouter = () => {


    return (
        <Router basename='/'>
            <Routes>
                <Route
                    path='/list-characters'
                    element={<StarWarsHome />}
                    exact
                />

                <Route
                    path="/list-characters/:characterId"
                    element={<StarWarsHome />}
                />

                <Route
                    path="/*"
                    element={<Navigate to='/list-characters' />}
                />

                <Route
                    path='*'
                    element={<Navigate to='/list-characters' />}
                />
            </Routes>
        </Router>
    )
}

export default AppRouter
