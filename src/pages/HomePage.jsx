import PokemonCardContainer from '../components/PokemonCardContainer';
import UserForm from '../components/UserForm';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
    const { user } = useOutletContext()

    return (
        <>
            <h1>Welcome to home {user ? user.toUpperCase() : null}</h1>
            <PokemonCardContainer />
            <UserForm /> 
        </>
    )
}
export default HomePage;