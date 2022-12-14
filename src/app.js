//get the clicked movie id to use later 

let currentMovieId =null;
let allMovies = [];

const fetchMovies = async()=>await fetch('https://stevembugua.github.io/db.json')
.then((res)=>res.json())
.then((data)=>{
    if( typeof data === Object){
        showSingleMovie(data)
    }
  
    data.films.forEach(films => displayMovies(films))
})

//fetch all movies 

const fetchFirstMovie = async()=>await fetch('https://stevembugua.github.io/db.json/1')
.then((res)=>res.json())
.then((data)=>{
   showSingleMovie(data)
   console.log('the length is : ' + typeof data)
})



//display the movie to the web page

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

//accessing the html 
const filmsList = document.querySelector('.movies-list');
const movieCover = document.querySelector('.cover');
const movieTitle = document.querySelector('#title');
const movieDescription = document.querySelector('#description')
const theatreCapacity  =document.querySelector('.capacity')
const ticketsAvailable = document.querySelector('.remainder')
const movieShowtime = document.querySelector('.showtime')
const movieRunTime = document.querySelector('.runtime')
const buyMovieTicket  =document.querySelector('.buy-ticket')


//manipulation 


const showSingleMovie = (films)=>{
    movieCover.src = films.poster;
    movieTitle.innerHTML = films.title;
    movieDescription.innerHTML = films.description;
    theatreCapacity.innerHTML = films.capacity;
    ticketsAvailable.innerHTML = films.capacity-films.tickets_sold
    movieShowtime.innerHTML = ' : ' + films.showtime;
    movieRunTime.innerHTML =' : ' +  films.runtime + ' mins'
    
//buy the movie ticket 

buyMovieTicket.addEventListener('click',()=>{
    purchaseTicket(films)
})
}


const purchaseTicket = (films)=>{
    if(!(films.tickets_sold > films.capacity ) && (films.capacity - films.tickets_sold)>=1){

        films.tickets_sold +=1;
        
        ticketsAvailable.innerHTML = films.capacity-films.tickets_sold

    } else {
         ticketsAvailable.innerHTML = ' : Sorry, theatre is full'
    }
}

//calling the function
fetchMovies()
fetchFirstMovie()

