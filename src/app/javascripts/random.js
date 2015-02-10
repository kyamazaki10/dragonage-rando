$(function() {

    /**
     * Grab random dialogue from static JSON file.
     */
    $.getJSON('dialogue.json', function(data) {
        var min = 0;
        var max = data.dialogue.length - 1;
        var random = Math.floor(Math.random() * (max - min + 1) + min);

        $('.dialogue').append(data.dialogue[random]);
    });

});