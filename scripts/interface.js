const API_KEY = "api_key=95105f6a9bc5fcce272e3bdeecbb375f"
const API_BASE = "https://api.themoviedb.org/3"

const categories = [
    {   
        name: "trending",
        title: "Os Mais Populares",
        infoEndPoint: "/trending/movie/week?",
        element: "trending"
    },
    {   
        name: "release",
        title: "Lançamentos",
        infoEndPoint: "/discover/movie?",
        element: "release"
    },
    {   
        name: "toprated",
        title: "Os Melhores",
        infoEndPoint: "/movie/top_rated?",
        element: "melhores"
    }
]

async function populateHomeList(categories) {
    for( category of categories ) {
        res = await fetch(`${API_BASE}${category.infoEndPoint}${API_KEY}`)
        movies = await res.json()

        const html = document.getElementsByClassName(category.element)[0]
        for( movie of movies.results ) {
            html.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="item">`
        }
    }
}

function populateHighlights() {
    const highlight = document.getElementsByClassName('highlights')[0]
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=95105f6a9bc5fcce272e3bdeecbb375f")
    .then( res => res.json() )
    .then( movies => {
        highlightedMovie = Math.floor(Math.random() * movies.results.length)
        selectedMovie = movies.results[highlightedMovie]
        highlight.innerHTML += `<img src="https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}" class="item img-fluid">`
        movieTitle = document.getElementById('title')
        movieTitle.innerHTML = `${selectedMovie.title}` 
        movieDescription = document.getElementById('review')
        movieDescription.innerHTML = `${selectedMovie.overview}`
    })
}

populateHomeList(categories)
populateHighlights()