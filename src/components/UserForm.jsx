import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const UserForm = () => {
    const [pokemonName, setPokemonName] = useState('')
    const { addData, getPokemonData } = useOutletContext()


    const handleSubmit = (event) => {
        event.preventDefault()
        getPokemonData(pokemonName, addData)
        setPokemonName("")
    }

    return (
        <>
            <div className="flex justify-center"> 
                <Form onSubmit={()=>handleSubmit(event)}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control 
                        className="me-auto" 
                        placeholder="type in pokemons name:"
                        name="pokemon-name"
                        value={pokemonName}
                        onChange={(evt)=>setPokemonName(evt.target.value)}
                        />
                        <Button variant="secondary" type="submit">Submit</Button>
                        <div className="vr" />
                        <Button onClick={()=>setPokemonName("")} variant="outline-danger">
                            Reset
                        </Button>
                    </Stack>
                </Form>
            </div>
        </>
    )

}

export default UserForm;