<template>
    <div class="singleMovie" v-if="movie">
        <p class="title">{{movie.Title}}</p>
        <img :src="movie.Poster" alt="">
        <table>
            <tr>
                <td>Actors: </td>
                <td>{{movie.Actors}}</td>
            </tr>
            <tr>
                <td>Awards: </td>
                <td>{{movie.Awards}}</td>
            </tr>
            <tr>
                <td>Box Office: </td>
                <td>{{movie.BoxOffice}}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{{movie.Country}}</td>
            </tr>
            <tr>
                <td>Language: </td>
                <td>{{movie.Language}}</td>
            </tr>
            <tr>
                <td>Writer</td>
                <td>{{movie.Writer}}</td>
            </tr>
            <tr>
                <td>Website</td>
                <td>{{movie.Website}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import {axios} from "../../common"
export default {
    data() {
        return {
            movie: null
        }
    },

    async mounted() {
        const {data} = await axios.get(`http://www.omdbapi.com/?i=${this.$route.params.id}&apikey=77fb10cd`)
        this.movie = data
        console.log(this.movie);
    }
}
</script>

<style lang="scss" scoped>
    div[class="singleMovie"]{
        background: #FAFAFA;
        padding: 2em 5em;

        p[class="title"]{
            font-size: 1.4em;
            text-align: center;
            font-weight: 600;
        }
        img{
            display: block;
            margin: 1em auto;
        }
        table{
            width: 50%;
            margin: auto;
            font-size: 1.2em;
        }
    }
</style>