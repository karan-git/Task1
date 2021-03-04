<template>
    <div class="shows">
        <form @submit.prevent="handleSearch">
            <input class="search" type="text" placeholder="Search by IMDB IDs with comma seperated" v-model="search" />
        </form>
        <div class="movies">
            <p class="title">Movies</p>
            <input class="searchByTitle" type="text" v-model="searchByTitle" placeholder="Search Movie by Title">
            <ul v-if="filteredList.length > 0">
                <li class="movieCard" v-for="(movie, i) in filteredList" :key="i">
                    <img :src="movie.Poster" alt="" @click="addFavorite(movie)">
                    <div class="details">
                        <p class="movieTitle">{{movie.Title}}</p>
                        <p class="plot">{{movie.Plot}}</p>
                        <p class="actors"><span class="subTitle">Actors:</span> {{movie.Actors}}></p>
                        <p class="director"><span class="subTitle">Director:</span> {{movie.Director}}</p>
                        <span class="imdb">
                            <span><span class="subTitle">IMDB ID: </span>{{movie.imdbID}}</span>
                            <span><span class="subTitle">IMDB Rating: </span>{{movie.imdbRating}}</span>
                        </span>
                        <button @click="$router.push(`/movie/${movie.imdbID}`)">View more..</button>
                    </div>
                </li>
            </ul>
            <div class="blank" v-else>
                No item found
            </div>
        </div>
        <div class="favorite">
            <p class="favorite">Favorite Movies</p>
            <div class="blank" v-if="favoriteMovies && favoriteMovies.length == 0">
                No item found
                <span class="makeFav">(Click on movie poster to make it favorite)</span>
            </div>
            <FavoriteMovies v-else v-for="(favorite, i) in favoriteMovies" :key="i" :favorite="favorite"/>
        </div>
    </div>
</template>

<script>
import {axios} from "../../common"
import FavoriteMovies from "./favorite"
export default {
    data() {
        return {
            movies: [],
            search: "",
            searchByTitle: "",
            favoriteMovies: []
        }
    },

    components: {
        FavoriteMovies
    },

    computed: {
        filteredList() {
            return this.movies && this.movies.length > 0 ? this.movies.filter(movie => {
                return movie.Title.toLowerCase().includes(this.searchByTitle.toLowerCase());
            })
            : 
            this.movies
        }
    },

    methods: {
        async fetchShow() {
            const {data} = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=77fb10cd")
            this.movies.push(data)
        },

        handleSearch() {
            let ids = [];
            ids = this.search.split(",")
            this.movies = [];
            ids.map(async id => {
                const {data} = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=77fb10cd`)
                if(!data.Error){
                    this.movies.push(data)
                }
            })
        },

        addFavorite(movie){
            this.favoriteMovies.push(movie);
        }
    },

    mounted() {
        this.fetchShow();
    }
}
</script>

<style lang="scss" scoped>
    div[class="shows"]{
        padding: 1em 5em;
        input[class="search"]{
            outline: none;
            padding: .5em 1em;
            width: 25em;
        }
        input[class="searchByTitle"]{
            outline: none;
            padding: .5em 1em;
            margin-bottom: 2em; 
        }
        div[class="favorite"]{
            float: right;
            display: flex;
            flex-direction: column;
            p[class="favorite"]{
                font-size: 1.2em;
                padding: 1em 0;
            }
            div[class="blank"]{
                padding: 2em;
                display: flex;
                flex-direction: column;
                text-align: center;
                span[class="makeFav"]{
                    color: #777;
                    font-size: .8em;
                }
            }
        }
        div[class="movies"]{
            float: left;
            p[class="title"]{
                font-size: 1.5em;
                padding: 1em 0;
            }

            div[class="blank"]{
                padding: 2em;
            }

            ul{
                list-style-type: none;
                li{
                    background: #FAFAFA;
                    display: flex;
                    width: 38em;
                    margin-bottom: 1em;
                    img{
                        width: 12em;
                        height: 18em;
                        cursor: pointer;
                    }
                    div[class="details"]{
                        padding: 1em;
                        p[class="movieTitle"]{
                            font-weight: 600;
                            font-size: 1.2em;
                        }
                        p[class="plot"]{
                            padding: .4em 0;
                        }
                        p{
                            padding: .4em 0;
                        }
                        span[class="subTitle"]{
                            font-weight: 600;
                        }
                        span[class="imdb"]{
                            display: flex;
                            justify-content: space-between;
                            font-size: .8em;
                            padding-top: 1em;
                        }
                        button{
                            float: right;
                            margin-top: 1em;
                            padding: .4em 1em;
                            outline: none;
                            border: none;
                            color: white;
                            background: #666;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>