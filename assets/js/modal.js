let button = document.querySelector('.btn-info')
let modal = document.querySelector('.modal')
let movieCoverModal = document.querySelector('.movie-cover-modal')
let movieNameModal = document.querySelector('.movie-name-modal')
let movieDescriptionModal = document.querySelector('.movie-description-modal')
let closeModalButton = document.querySelector('.close-btn')
let body = document.getElementsByTagName('body')[0]
let movieReleaseDate = document.querySelector('.release-date')

async function populateModal(movie) {
  console.log(movie.release_date)
  movieCoverModal.style.background = `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
  movieCoverModal.style.backgroundSize = 'cover'
  movieCoverModal.style.backgroundRepeat = 'no-repeat'

  movieNameModal.innerHTML = movie.title
  movieReleaseDate = movie.release_date
  movieDescriptionModal.innerHTML = movie.overview
}

async function fetchMovie(id) {
  const data = await fetch(`${API_BASE}/movie/${id}?${API_KEY}`)
  const movieDetails = await data.json()

  populateModal(movieDetails)
}

const openModal = event => {
  const movieId = event.target.dataset.id
  fetchMovie(movieId)

  body.classList.toggle('modal-opened')

  modal.style.display = 'flex'

}

const closeModal = () => {
  modal.style.display = 'none'
  body.classList.toggle('modal-opened')
}

button.addEventListener('click', openModal)
closeModalButton.addEventListener('click', closeModal)
