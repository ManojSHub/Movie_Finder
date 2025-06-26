import { useState, useEffect } from "react";
import { options } from "../utils/options";

function useFetch(api, queryTerm=""){

    const [data, setData] = useState([]);

    
    useEffect(()=>{
        async function fetchMovies(){
            const response = await fetch(`https://api.themoviedb.org/3/${api}?query=${queryTerm}`, options);

            const data = await response.json();

            console.log(data.results);
            setData(data.results); 

        }

        fetchMovies();

    }, [api, queryTerm]);


    return {
        data
    }
}

export default useFetch;