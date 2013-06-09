"use strict";

var DEFAULT_START = "000000000000";
var DEFAULT_END = "tip";


$(window).load(function () {

    var source = $("#file-template").html();
    var template = Handlebars.compile(source);

    //Setting event handler for the start button
    $("#start-replay").click(function (event)
    {
        var start = $("#from").val() || DEFAULT_START;
        var end = $("#to").val() || DEFAULT_END;

        var content = start + " - " + end;
        var html = template({file: content});
        $("#file").html(html);
    });
});