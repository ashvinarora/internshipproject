var api = 'https://api.giphy.com/v1/gifs/random?';
var apiKey = '&api_key=ikUNlNMC7dJWqXHYkSBQkGZ95uutY5mI';
var rating = '&pg';
function setup() {
    noCanvas();
    var url = api + apiKey + rating;
    loadJSON(url, gotData);
}

function gotData(giphy) {
    createImg(giphy.data.images.original.url);
}
