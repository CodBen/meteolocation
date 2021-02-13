console.log('Mon JS va rocker !')

// ---------------

let ville;
//Je préselectionne ma ville(de base avant modification)

if("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
    

        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&appid=30d9c893acee6948c65f5c233f90601c&units=metric';
        let requete = new XMLHttpRequest();
    requete.open('GET', url);
    //
    requete.responseType = 'json';

    requete.send();

    requete.onload = () => {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200 ) {
                // verification que tout est OK
                let reponse = requete.response;
                console.log(reponse);
                //CHECK
                let ville = reponse.name;
                let temperature = reponse.main.temp
                document.querySelector('#ville').textContent=ville; // SELECTEUR
                document.querySelector('#temperature_label').textContent=temperature // SELECTEUR
            } else {
                alert('Bien évidement, ça ne fonctionne pas !');
            }
        }
    }

    });

} else {
    ville ='marseille';
    recupererMeteo(ville);
}
// Je passe ma function avec le parametre ville pour qu'il soit dynamique
let changerDeVille = document.querySelector('#changer');
// je sélectionne le bouton
changerDeVille.addEventListener('click', () => { 
    ville = prompt('Quelle ville souhaitez vous voir ?');
    // je récupère la sélection et l'insère dans la fonction
    recupererMeteo(ville);
});

function recupererMeteo(ville) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=30d9c893acee6948c65f5c233f90601c&units=metric';
    // je stock mon api et je la passe dans la fonction pour qu'elle change onclick
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    //
    requete.responseType = 'json';

    requete.send();

    requete.onload = () => {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200 ) {
                // verification que tout est OK
                let reponse = requete.response;
                console.log(reponse);
                //CHECK
                let ville = reponse.name;
                let temperature = reponse.main.temp
                document.querySelector('#ville').textContent=ville; // SELECTEUR
                document.querySelector('#temperature_label').textContent=temperature // SELECTEUR
            } else {
                alert('Bien évidement, ça ne fonctionne pas !');
            }
        }
    }
}