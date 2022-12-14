const filmsList = document.querySelector('.movies-list');
const movieCover = document.querySelector('.cover');
const movieTitle = document.querySelector('#title');
const movieDescription = document.querySelector('#description')
const theatreCapacity  =document.querySelector('.capacity')
const ticketsAvailable = document.querySelector('.remainder')
const movieShowtime = document.querySelector('.showtime')
const movieRunTime = document.querySelector('.runtime')
const buyMovieTicket  =document.querySelector('.buy-ticket')


//get the clicked movie id to use later 

let currentMovieId =null;
let allMovies = [];

 const fetchMovies = async()=>await fetch('https://stevembugua.github.io//db.json')
 .then((res)=>res.json())
 .then((data => {
     if( typeof films === Object) {
        showSingleMovie(films)
    }
  
    data.films.forEach(films => displayMovies(films))
}))


const fetchFirstMovie = async()=>await fetch('https://stevembugua.github.io/db.json')
.then((res)=>res.json())
.then((data)=>{
    showSingleMovie(data.films[0])
   
})




const displayMovies =(films)=>{
   /* data.map((movie, index)=>{

        //populate movies array
        allMovies.push(movie)*/

        const listItem = document.createElement('li')
        listItem.innerHTML = films.title;
        listItem.addEventListener('click',()=>{
           showSingleMovie(films);
        
        })
        filmsList.appendChild(listItem)

    }




const showSingleMovie = (films)=>{
    movieCover.src = films.poster;
    movieTitle.innerHTML = films.title;
    movieDescription.innerHTML = films.description;
    theatreCapacity.innerHTML = films.capacity;
    availabletickets=films.capacity-films.tickets_sold
    ticketsAvailable.innerHTML = availabletickets
    movieShowtime.innerHTML = ' : ' + films.showtime;
    movieRunTime.innerHTML =' : ' +  films.runtime + ' mins'
    
//buy the movie ticket 

buyMovieTicket.addEventListener('click',()=>{
    purchaseTicket(films)
})
}


const purchaseTicket = (films)=>{
    if(availabletickets>=0) {
        
        ticketsAvailable.innerHTML =  `${availabletickets-=1}`

    } else if (availabletickets < 0) {
         ticketsAvailable.innerHTML = ' : Sorry, theatre is full'
    }
}


fetchMovies()
fetchFirstMovie()

