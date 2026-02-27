import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useOutletContext } from 'react-router-dom'

function PokemonCard({
      imgSrc, 
      pokeName, 
      pokemonId, 
      shinyImgSrc,
      shiny
    }){
    const [isShiny, setIsShiny] = useState(shiny)
    const navigate = useNavigate()
    const { rmData, updateShine } = useOutletContext()

    const handleShine = () => {
      updateShine(pokemonId, !isShiny)
      setIsShiny(!isShiny)
    }

    return(
            <Card id={`${pokeName}-card`} style={{ width: '18rem' }} bg="black" border="warning">
              <Card.Img variant="top" src={isShiny? shinyImgSrc : imgSrc} />
              <Card.Body>
                <Card.Title>{pokeName[0].toUpperCase()+pokeName.slice(1,)}</Card.Title>
                <Button variant="warning" onClick={handleShine}>
                    Shiny
                </Button>
                <Button onClick={()=>navigate(`/pokemon/${pokemonId}`)}>
                  Details
                </Button>
                <Button variant="danger" onClick={()=>rmData(pokemonId)}>
                  remove
                </Button>
              </Card.Body>
            </Card>
    )
}

export default PokemonCard;