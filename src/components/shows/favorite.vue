<template>
    <div class="favorite">
        <img :src="favorite.Poster" alt="">
        <div class="details">
            <p class="favoriteTitle">{{favorite.Title}}</p>
            <p class="plot">{{favorite.Plot}}</p>
            <p class="actors"><span class="subTitle">Actors:</span> {{favorite.Actors}}></p>
            <p class="director"><span class="subTitle">Director:</span> {{favorite.Director}}</p>
            <span class="imdb">
                <span><span class="subTitle">IMDB ID: </span>{{favorite.imdbID}}</span>
                <span><span class="subTitle">IMDB Rating: </span>{{favorite.imdbRating}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["favorite"]
}
</script>

<style lang="scss" scoped>
    div[class="favorite"]{
        background: #FAFAFA;
        display: flex;
        width: 25em;
        margin-bottom: 1em;
        img{
            display: block;
            margin: auto;
            width: 10em;
            height: 13em;
        }
        div[class="details"]{
            padding: 1em;
            p[class="favoriteTitle"]{
                font-weight: 600;
                font-size: 1em;
            }
            p[class="plot"]{
                padding: .4em 0;
                font-size: .9em;
            }
            p{
                padding: .4em 0;
            }
            p[class="actors"]{
                font-size: .9em;
            }
            p[class="director"]{
                font-size: .9em;
            }
            span[class="subTitle"]{
                font-weight: 600;
                font-size: 1em;
            }
            span[class="imdb"]{
                display: flex;
                justify-content: space-between;
                font-size: .8em;
                padding-top: 1em;
            }
        }
    }
</style>