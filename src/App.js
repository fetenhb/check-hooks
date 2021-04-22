
import { useState } from "react";
import './App.css';
import MovieList from './component/MovieList/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovieL from './component/AddMovie/AddMovie';
import SearchMovie from './component/SearchMovie/SearchMovie'
function App() {
  
const [movies, setMovies]=useState([
  {
    title: "HOLIDATE",
    description:"Sloane et Jackson détestent tous les deux les grandes fêtes du calendrier. Célibataires endurcis, ils se retrouvent souvent à la table des enfants ou aux côtés d'inutiles petits amis.  ",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_SX675_AL_.jpg",
    backImg:'https://thegatewayonline.ca/wp-content/uploads/2020/12/el-holidate.jpg',
    director : "John Whitesell",
    year:2020,
    duration : '163 min',
    type :'Comédie, Romance',
    trailer :'https://www.youtube.com/watch?v=hxaaAoI57fk',
    rate: 2,
    id: 1,
    },
    {
    title: "Les Sept de Chicago",
    description: " Lorsque la manifestation en marge de la convention démocrate de 1968 tourne à l'affrontement, ses organisateurs sont accusés de conspiration et d'incitation à la révolte.",
    posterUrl:"https://fr.web.img6.acsta.net/pictures/20/09/14/07/20/3234061.jpg",
    backImg:'https://www.screentune.com/wp-content/uploads/2020/10/Les-Sept-de-Chicago-2020-_-ScreenTune.png',
    director : "Aaron Sorkin",
    year:2020,
    duration : '149 min',
    type :'Drame, Historique, Thriller',
    trailer :'https://www.youtube.com/watch?v=nH79C2udi5U',
    rate: 5,
    id: 2,
    },
    {
    title: "Enola Holmes",
    description:"Enola est la cadette de la famille Holmes, née en 1884. Elle vit seule dans la campagne britannique avec sa mère, Eudoria, qui l'éduque de manière peu orthodoxe et loin des codes de la société d'autrefois.",
    posterUrl: "https://fr.web.img3.acsta.net/f_png/c_310_420/o_logo-netflix-n.png_5_se/pictures/20/09/23/11/08/4358352.jpg",
    backImg:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeqUW6AKzKbj6S4XMUkai-YyRImRg1LLJVaHpQ_r3_7I_yZaLfkYiXOPTstBmiBMU8w0FdzJDEiqLtlztDG_qeW2TQq2.jpg?r=037',
    director : "Harry Bradbeer",
    year:2020,
    duration : '243 min',
    type :'Aventure, Policier, Historique',
    trailer :'https://www.youtube.com/watch?v=1d0Zf9sXlHk',
    rate: 1,
    id: 3,
    },
  {
    title: "Riche en amour",
    description: "Pour séduire Paula, Teto veut prouver qu'il n'est pas qu'un gosse de riche. Il s'invente alors des origines modestes, mais son mensonge sera lourd de conséquences.",
    posterUrl: "https://imgsrc.cineserie.com/2020/04/1524043-1.jpg?ver=1",
    backImg:'https://i.ytimg.com/vi/snqqRWY_DXs/maxresdefault.jpg',
    director : "Bruno Garotti",
    year:2020,
    duration : '164 min',
    type :'Comédie, Romance',
    trailer :'https://www.youtube.com/watch?v=-rGw-e4-7xI',
    rate: 3,
    id: 4,
    },
  {
    title: "Une ode américaine",
    description:"J.D. Vance, un ancien Marine originaire du sud de l’Ohio désormais étudiant en droit à Yale, est sur le point de décrocher le poste de ses rêves quand une affaire de famille l'oblige à retourner chez lui et à retrouver tout ce qu'il avait tant voulu quitter. ",
    posterUrl:"https://img7.cdn.cinoche.com/images/a1b473efe52bb808b7d10d7257f0851e.jpg",
    backImg:'https://freakingeek.com/wp-content/uploads/2020/11/UneOdeAmericaine-Banniere.jpg',
    director : "Ron Howard",
    year:2020,
    duration : '176 min',
    type :'Drame',
    trailer : 'https://www.youtube.com/watch?v=3TdSqB0BrNw',
    rate: 4,
    id:5,
    },
    {
      title: "7. Koğuştaki Mucize",
      description:" Séparé de sa fille, un père avec un handicap mental doit prouver son innocence lorsqu’il est arrêté pour le meurtre d’une enfant. ",
      posterUrl:"https://fr.web.img4.acsta.net/pictures/19/10/08/15/52/1926679.jpg",
      backImg:'https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/7-kogustaki-mucize-netflix-qu-est-ce-que-c-est-que-ce-film-turc-qui-fait-le-buzz-4657074/99109858-1-fre-FR/7.Kogustaki-Mucize-Netflix-Qu-est-ce-que-c-est-que-ce-film-turc-qui-fait-le-buzz.jpg',
      director : "Mehmet Ada Öztekin",
      year:2020,
      duration : '132 min',
      type :'Drame',
      trailer : 'https://www.youtube.com/watch?v=z_tgY9Nmo18',
      rate: 5,
      id:6,
      },
      {
        title: "Durante la Tormenta",
        description:"  Projetée dans le passé suite à une rupture du continuum de l'espace-temps, Vera sauve la vie d'un jeune garçon, mais perd alors sa propre fille. La retrouvera-t-elle ?",
        posterUrl:"https://1.bp.blogspot.com/-i1u93LoXkgM/X0fq9b-AV3I/AAAAAAAAcFw/4BwnOydmpVAonw15nsFvvhZpjPNCHwZhACLcBGAsYHQ/s1600/Durante%2Ba%2BTormenta%2B-%2BPoster.jpg",
        backImg:'https://fueradecamarahome.files.wordpress.com/2019/04/maxresdefault.jpg',
        director : "Oriol Paulo",
        year:2019,
        duration : '128 min',
        type :'Drame',
        trailer : 'https://www.youtube.com/watch?v=t2-79qK2Cio',
        rate: 3,
        id:7,
        },
])


const addNewMovie = (e, newMovie) => {
  e.preventDefault();
  setMovies([...movies, newMovie]);
}

const [nameSearch, setNameSearch]= useState('')
const [ratingSearch, setRatingSearch]= useState(1)
  return (
    <div>
       <SearchMovie 
          nameSearch={nameSearch} 
          setNameSearch={setNameSearch} 
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
       />
       <MovieList 
          movies={movies} 
          nameSearch={nameSearch}
          ratingSearch={ratingSearch}

        />
       <AddMovieL 
          addNewMovie={addNewMovie}
        />
    
    </div>
  );
}

export default App;
