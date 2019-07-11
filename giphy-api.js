//API JQuery will go in here for retrieving gifs from Giphy
// used https://www.youtube.com/watch?v=pfdP26jPvEk for the tutorial.

function getData() {

    //Calling for a request and asking Giphy for information
    var input = $('#searchtext').val();
    var xhr = $.get('https://api.giphy.com/v1/gifs/search?&q=' + input + '&api_key=YOUR_API_KEY&limit=30');
}