  
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// store
const store = {
    movies: []
}

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    let result
    if(data.results.length === 0) {
        result = []
    } else {
        result = data.results
    }
    store.movies = result
    showMovies(result)
}

function showMovies(movies) {
    main.innerHTML = ''

    if(movies.length === 0) {
        main.innerHTML = `
            <div class="wrapper">
                <h1 class="text">Not founds 🎃</h1>
            </div>
        `
    }

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, popularity, release_date } = movie

        // console.log(new Date(release_date).getTime()) // 최신순 비교 데이터

        // console.log(Math.floor(popularity)) // 인기순

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                <span class="popularity">${Math.floor(popularity / 100)}</span>
            </div>
            <div class="overview">
                <span>${release_date}</span>
                <h3>Overview</h3>
                ${overview}
                </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


// select onChange
function handleChange(selectedValue) {

    console.log('check')

    let temp;

    if(selectedValue === 'popularity') {
        main.innerHTML = ''
        temp = [
            ...store.movies
        ]
        showMovies(temp.sort((a, b) => b.popularity - a.popularity))
    } else if(selectedValue === 'latest') {
        main.innerHTML = ''
        temp = [
            ...store.movies
        ]
        showMovies(temp.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()))
    } else if(selectedValue === 'vote_average') {
        main.innerHTML = ''
        temp = [
            ...store.movies
        ]
        showMovies(temp.sort((a, b) => b.vote_average - a.vote_average))
    } else {
        main.innerHTML = ''
        showMovies(store.movies)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        // search.value = ''
    } else {
        window.location.reload()
    }
})