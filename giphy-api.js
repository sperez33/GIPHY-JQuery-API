//API JQuery will go in here for retrieving gifs from Giphy
// used https://www.youtube.com/watch?v=pfdP26jPvEk for the tutorial.

function getData() {

    //Calling for a request and asking Giphy for information
    var input = $('#searchtext').val();
    var xhr = $.get('https://api.giphy.com/v1/gifs/search?&q=' + input + '&api_key=YOUR_API_KEY=30');

    // this entire block is the promise that GIPHY will return what I asked for in the block above
    xhr.done(function(response) {
        //this line clears everything from the previous search when the search button is clicked
        $('.giphyimg').remove();

        console.log('success got data', response);
        var jiffs = response.data
        for (i in jiffs) {
            $('#inner').append('<img class="giphyimg" src=' + jiffs[i].images.original.url + ' style="height:350px;width:350px">')
        }
    });
}