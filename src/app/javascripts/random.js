$(function() {

    /**
     * Grab random dialogue from static JSON file.
     */
    $.getJSON('dialogue.json', function(data) {
        var min = 0;
        var max = data.dialogue.length - 1;
        var dialogue = data.dialogue[Math.floor(Math.random() * (max - min + 1) + min)];

        for (var i = 0; i < dialogue.length; i++) {
            $('.dialogue').append('<p>' + dialogue[i] + '</p>');
        }
    });

});