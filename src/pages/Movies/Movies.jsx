import React from "react";

import MovieCard from "../../components/MovieCard/MovieCard";

import "./Movies.scss";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";

class Movies extends React.Component {
    state = {
        movies: [
            {
                title: "Pulp Fiction",
                img: "../../../public/images/pulp-fiction.jpg",
                description: "Action & Adventure",
                year: "2004"
            },
            {
                title: "Bohemian Rhapsody",
                img: "../../../public//images/bohemian-rhapsody.jpg",
                description: "Drama, Biography, Music",
                year: "2018"
            },
            {
                title: "Kill Bill: Vol 2",
                img: "../../../public//images/kill-bill2.jpg",
                description: "Oscar winning movie",
                year: "2004"
            },
            {
                title: "Avengers: Infinity War",
                img: "../../../public//images/avengers-infinity.jpg",
                description: "Action & Adventure",
                year: "2018"
            },
            {
                title: "Inception",
                img: "../../../public//images/inception.jpg",
                description: "Action & Adventure",
                year: "2010"
            },
            {
                title: "Reservoir dogs",
                img: "../../../public//images/reservoir-dogs.jpg",
                description: "Oscar winning movie",
                year: "1992"
            }
        ]
    };

    render() {
        const { movies } = this.state;

        return (
            <div className="movies">
                <AddMovieModal
                    isModalOpen={this.props.isAddMovieModalOpen}
                />
                {movies.length &&
                    movies.map((movie, index) => (
                        <MovieCard key={`${movie.title}${index}`} movie={movie} />
                    ))}
            </div>
        );
    }
}

export default Movies;
