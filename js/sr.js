"use strict";

var DEFAULT_START = "000000000000";
var DEFAULT_END = "tip";


$(window).load(function () {

    var source = $("#file-template").html();
    var template = Handlebars.compile(source);

    //Setting event handler for the start button
    $("#start-replay").click(function (event) {
        var start = $("#from").val() || DEFAULT_START;
        var end = $("#to").val() || DEFAULT_END;

        //Example hgserve raw file url:
        // http://localhost:8000/raw-file/bd1acca4ed1f/.hgignore

        if (!$("#url").val()) {
            $("#file").html("URL is required");
        } else {
            var file = $("#url").val();

            $.get(file, function (data) {
                var range = $("#url").val() + " changes: " + start + " - " + end;
                var html = template({range: range, fileContents: data});
                $("#file").html(html);
            }, "json");

        }
    });
});
