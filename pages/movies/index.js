import React, { useEffect } from "react";
import { getMovies } from "/services/movie";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "../../shared/constant/router";
import Search from "../../shared/components/Search";
import { getSearchMovie } from "../../services/movie";
export default function Movies({ movies, hasError,searchMovie }) {
  const { push } = useRouter();

  return (
    <>
   
      <div className="flex items-center gap-x-20 gap-y-10 p-4 px-20 flex-wrap">
        {movies?.map((item) => {
          const { Title, Year, imdbID, Poster } = item;
          return (
            <div
              key={Title}
              className="single-item bg-red-200 w-1/5 shadow-indigo-300 p-2 rounded-md text-center"
            >
              <>
                <div className="h-[350px]">
                  <Image
                    className="h-full"
                    src={Poster}
                    width="400"
                    height="400"
                    alt={Title}
                  />
                </div>
                <div className="content-info">
                  <div className="font-bold	text-lg my-3">{Title}</div>
                  <span className="rounded-lg text-white bg-gray-700 px-4 py-1 ">
                    Year : {Year}
                  </span>
                  <div className="my-3 font-bold">ImdbID-{imdbID}</div>
                  <button
                    onClick={() => push(ROUTER.MOVIE_ID(imdbID))}
                    className="bg-blue-500 text-white px-3 pt-1 pb-2 hover:bg-blue-400  rounded-md"
                  >
                    Read more
                  </button>
                </div>
              </>
            </div>
          );
        })}
        {hasError && (
          <div
            class="bg-red-100 border mx-auto mt-11 border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span class="block sm:inline">Data not found</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await getMovies();
    const movies = res.data.Search;
    
    return {
      props: {
        movies,
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
