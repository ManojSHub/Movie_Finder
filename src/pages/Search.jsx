import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Search({ api }) {

    // console.log(api);
    const [searchParams] = useSearchParams();

    const queryTerm = searchParams.get("q");
    // console.log(queryTerm);

    const {data:movies} = useFetch(api, queryTerm);

    useEffect(()=>{
        document.title = `${queryTerm}/Cinebite`;
    });

    return (
        <main>

            <section>
                <p className="text-3xl text-gray-800">
                    {
                        movies.length === 0 ? `No result for found for (${queryTerm})`:`Result for (${queryTerm})`
                    }
                </p>
            </section>


            <section className="max-w-7xl max-auto py-7">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {/* {
                    dummyMovies.map((_,index)=>(
                        <Card key={index} />
                    ))
                } */}

                    {
                        movies.map((movie) => (
                            <Card movie={movie} key={movie.id} />
                        ))
                    }

                </div>
            </section>
            Search
        </main>
    );
}

export default Search;