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
  },
  {
    name: "nowplaying",
    title: "Nos cinemas",
    infoEndPoint: "/movie/now_playing?",
    element: "cinemas"
  },
  {
    name: "upcoming",
    title: "Em breve nos cinemas",
    infoEndPoint: "/movie/upcoming?",
    element: "upcoming"
  }
]

async function populateHomeList(categories) {
  for( category of categories ) {
    const res = await fetch(`${API_BASE}${category.infoEndPoint}${API_KEY}`)
    const movies = await res.json()

    const html = document.getElementsByClassName(category.element)[0]
    for( movie of movies.results ) {
      html.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="item">`
    }
  }
}

async function populateHighlights() {
  const highlight = document.getElementsByClassName('highlights')[0]
  const movieInfoButton = document.querySelector('.btn-info')

  const fetchResults = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=95105f6a9bc5fcce272e3bdeecbb375f")
  const moviesJson = await fetchResults.json()
  const movies = moviesJson.results
  
  const highlightedMovie = Math.floor(Math.random() * movies.length)
  const selectedMovie = movies[highlightedMovie]
  

  highlight.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}")`
  highlight.style.backgroundSize = 'cover'
  movieTitle = document.getElementById('title')
  movieTitle.innerHTML = `${selectedMovie.title}` 
  movieInfoButton.setAttribute("data-id", selectedMovie.id )
  movieDescription = document.getElementById('review')
  movieDescription.innerHTML = `${selectedMovie.overview}`
}

populateHomeList(categories)
populateHighlights()