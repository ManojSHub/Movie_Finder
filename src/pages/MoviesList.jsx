
import { useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MoviesList( { api, title } ) {
        
    const {data:movies} = useFetch(api);

    useEffect(()=>{
        document.title = `${title}/Cinebite`;
    },[]);

    return (
        <main>
            <section className="max-w-7xl max-auto py-7">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {/* {
                        dummyMovies.map((_,index)=>(
                            <Card key={index} />
                        ))
                    } */}

                    {
                        movies.map((movie)=>(
                            <Card movie={movie} key={movie.id}/>
                        ))
                    }

                </div>
            </section>
        </main>
    );
}

export default MoviesList;