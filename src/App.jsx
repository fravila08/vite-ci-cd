import './App.css'
import Banner from './components/Banner/Banner';
import Container  from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    console.log(user)
  }, [user])


  const [pokemonData, setPokemonData] = useState([])
    
  const addData = (data) => {
      setPokemonData(
          [...pokemonData, data]
      )
  }

  const updateShine = (id, shine) => {
    setPokemonData(
      pokemonData.map((pokemon)=>(
        pokemon.id === id ? 
          {...pokemon, "shiny":shine}
          :
          pokemon
      ))
    )
  }
    
  const rmData = (id) => {
      setPokemonData(
          pokemonData.filter((pokemon)=>(pokemon.id !== id))
      )
  }

  const getPokemonData = async(idOrName, func) => {
      let requestURL = `https://pokeapi.co/api/v2/pokemon/${idOrName}`
      try{
          let response = await axios.get(requestURL)
          let data = response.data
          let dataWithShine = {...data, "shiny":false}
          func(dataWithShine)
      }
      catch(err){
          console.error(err)
          alert("Pokemon doesn't exist")
      }
  }

  return (
    <>
      <NavBar/>
      <Container>
        <button onClick={()=>setUser("francisco")}>
          set user
        </button>
        <Banner />
        <Outlet context={{
          user, 
          pokemonData, 
          addData, 
          rmData,
          getPokemonData,
          updateShine
        }}/>
      </Container>
    </>
  )
}

export default App
