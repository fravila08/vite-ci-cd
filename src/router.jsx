import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PokemonDetailsPage from "./pages/PokemonDetailsPage"
import App from "./App"
import { createBrowserRouter, createHashRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"

const DEBUG = JSON.parse(import.meta.env.VITE_DEBUG)

const createRouter = 
    DEBUG ?
    createBrowserRouter
    :
    createHashRouter;


const router = createRouter([{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path:'about',
            element: <AboutPage/>
        },
        {
            path:'pokemon/:id',
            element: <PokemonDetailsPage/>
        },
        {
            path:'*',
            element: <NotFoundPage />
        }
    ]
}])

export default router;