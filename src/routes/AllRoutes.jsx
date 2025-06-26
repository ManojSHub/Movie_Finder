import { Routes, Route } from "react-router-dom";
import {MoviesList, MovieDetails, PageNotFound, Search} from "../pages";


export const AllRoutes = ()=>{
    
    return (
        <Routes>

            <Route path="/" element={<MoviesList api="movie/now_playing" title="Home"/>}/>

            <Route path="movie/:id" element={<MovieDetails title="Home"/>}/>

            <Route path="movies/popular" element={<MoviesList api="movie/popular" title="Popular"/>}/>

            <Route path="movies/top" element={<MoviesList api="movie/top_rated" title="Top_rated"/>}/>

            <Route path="movies/upcoming" element={<MoviesList api="movie/upcoming" title="Upcoming"/>}/>

            <Route path="search" element={<Search api="search/movie"/>}/>

            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    );

}