import './styles.scss';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import { movies } from './src/movies.js';

const app = document.getElementById('app');

let hacking = '<div id="hacker" class="containerFilms">';
const titre = '</br><h1> * Les Hackerflix *</h1></br>';
const bouton = '<button class="recent"> Recent Film Only </button></br></br>';
const bouton2 = '<button class="all"> All Films </button></br></br>';
for (let i = 0; i < movies.length; i++) {
  if (movies[i].img) {
    hacking += `
      <div class="card">
        <img src="posters/${movies[i].imdb}.jpg" class="poster" id="${movies[i].imdb}">
      </div>
    `;
  } else {
    hacking += `
      <div class="card">
        <div id="${movies[i].imdb}" class="imgcolor poster"><h4 class="card-title">${movies[i].title}</h4></div>
      </div>
        `;
  }
}
hacking += '</div>';

// POPUP

function popUpInfos() {
  // délégation d'évenement : on click sur les img de films = affiche popUp d'infos
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.poster')) {
      // console.log(e.target);

      let popUpInfosFilm = '';
      movies.forEach((element) => {
        if (e.target.id === element.imdb) {
          popUpInfosFilm += `
          <div class="fondPopUp">
          <div id="popUpInfos" class="popUp">
            <div id="un" ><i class="far fa-times-circle" ></i></div>
            <h3> Title: ${element.title}</h3>
            <p> Genres: </br> ${element.genres} </p>
            <p> Year: ${element.year}</p>
            <p> Note: ${element.note}</p>
            <p> Plot: </br> ${element.plot} </p>
            </div>
          </div> `;
          console.log('blabla');
          app.innerHTML += popUpInfosFilm;
          // console.log(popUpInfosFilm);
        }/* else {
          console.log(" rater.. fait un meilleur code !'");
        } */

        document.body.addEventListener('click', (el) => {
          if (el.target.matches('.far')) {
            const popupInfoToRemove = document.querySelector('.fondPopUp');
            popupInfoToRemove.remove();
          }
        });
      });
    }
  });
  // console.log(popUpInfosFilm);
}/* else {
          console.log(" rater.. fait un meilleur code !'");
        } */

popUpInfos();

// Recent only

document.body.addEventListener('click', (ele) => {
  if (ele.target.matches('.recent')) {
    const recentFilms = app.querySelectorAll('.card');
    // console.log(recentFilms);
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].year < 2000) {
        console.log(movies[i].year);
        recentFilms[i].style.display = 'none';
      }
    }
  }
});

// All Films

document.body.addEventListener('click', (ele) => {
  if (ele.target.matches('.all')) {
    const recentFilms = app.querySelectorAll('.card');
    // console.log(recentFilms);
    for (let i = 0; i < movies.length; i++) {
      console.log(movies[i].year);
      recentFilms[i].style.display = 'block';
    }
  }
});

// document.getElementByClassName('recent').style.display = 'block';

app.innerHTML += titre + bouton + bouton2 + hacking;

// délégation d'évenement pour qd on click sur les coeurs

// <img src="posters/tt0062622.jpg" style="width:100px;" />
// creer la section des chats favoris

/* Code Loic
const movies = [];
const main = document.querySelector('main');
main.addEventListener('click', (e) => {
  if (e.target.matches('.mov')) {
    console.log(movies[e.target.id]);
  }
});
for (let i = 0; i < movies.length; i++) {
  const div = `<div class="mov" id="${i}"></div>`;
  document.body.innerHTML += div;
}
*/
