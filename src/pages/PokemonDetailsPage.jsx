import { useParams, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


const PokemonDetailsPage = () => {
    const { getPokemonData } = useOutletContext()
    const { id } = useParams()
    const [details, setDetails] = useState(null)
    
    useEffect(()=>{
        getPokemonData(id, setDetails)
    }, [])

    return (
        <>
        {
        details ?
        <Card>
            <Card.Img variant="top" src={details.sprites.front_default} />
            <Card.Title>{details.name}</Card.Title>
            <Card.Body>
            <Card.Text>
                <ol>
                    Game Indices
                    {details.game_indices.map((indice)=>(
                        <li key={indice.version.name}>{indice.version.name}</li>
                    ))}
                </ol>
            </Card.Text>
            </Card.Body>
        </Card>
        :
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        }
        </>
    )
}

export default PokemonDetailsPage;