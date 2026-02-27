import "./banner.css"

const Banner = () => {
    return(
        <>
            <div 
              id="bannerContainer" 
              className="mx-auto max-w-sm flex flex-col items-center gap-x-6 bg-black rounded-md"
            >
                <h1 className="font-bold text-2xl">Corsair: Pokemon Project 5</h1>
                <img src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'/>
            </div>
        </>
    )
}

export default Banner;