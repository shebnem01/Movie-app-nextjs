import { useRouter } from "next/router";
import React from "react";
import { getMovieId } from "../../services/movie";
import Image from "next/image";
import { ROUTER } from "../../shared/constant/router";

export default function MovieDetail({ movie }) {
  const { push } = useRouter();
  console.log(movie);
  const { Title, Actors, Poster, Country, Language, Released, imdbRating } =
    movie;
  return (
    <>
      <button
        onClick={() => push(ROUTER.MOVIES)}
        className="bg-blue-400 text-white w-[120px] h-[40px] px-3 m-3 flex items-center justify-center rounded-md"
      >
        {" "}
        Back
      </button>
      <div className="flex gap-10 p-3 text-white">
        <div className="image">
          <Image src={Poster} width="400" height="400" alt={Title} />
        </div>
        <div>
          <h3 className="font-bold mb-3 text-xl">{Title}</h3>
          <div className="rounded-sm bg-blue-300 shadow p-3 gap-2 items-center mb-1">
            {" "}
            Actors :{Actors}
          </div>
          <div className="rounded-sm bg-blue-300 shadow p-3 gap-2 items-center mb-1">
            Country :{Country}
          </div>
          <div className="rounded-sm bg-blue-300 shadow p-3 gap-2 items-center mb-1">
            Released :{Released}
          </div>
          <div className="rounded-sm bg-blue-300 shadow p-3 gap-2 items-center mb-1">
            Language :{Language}
          </div>
          <div className="rounded-sm bg-blue-300 shadow p-3 gap-2 items-center mb-1">
            Imdb Rating :{imdbRating}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const movieID = query.movie_id;
    const { data } = await getMovieId(movieID);
    return {
      props: {
        movie: data,
      },
    };
  } catch (err) {
    return {
      props: {
        hasError: true,
      },
    };
  }
}
