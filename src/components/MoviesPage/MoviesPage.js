import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchMovie } from '../Services/MovieDB';
import Searchbar from "./Searchbar"



export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
  



    return (
        <>
            <Searchbar onSubmit={}/>
        </>
    )
}