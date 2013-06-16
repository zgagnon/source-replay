"use strict";

var DEFAULT_START = "000000000000";
var DEFAULT_END = "tip";


function createRandomString(length) {
    var string = "";
    for (var i = 0; i < 50; i++) {
        var number = 48 + Math.random() * 75;
        if((number > 57 && number < 65) || (number > 90 && number < 97)) {
            // Don't want these symbols cause they could cause problems in query strings
            i--;
        }else
        {
            string = string + String.fromCharCode(number);
        }

    }
    return string;
}
$(window).load(function () {

    var source = $("#file-template").html();
    var template = Handlebars.compile(source);

    //Setting event handler for the sign in button
    $("#signin").click(function (event) {
        var state = "";
        state = createRandomString(state);
        $.cookie("source-replay", state);

        var html = template({range: "none", fileContents: state});
        $("#file").html(html);

//        window.location.replace("https://github.com/login/oauth/authorize?client_id=0ec80b17f754d4c7b7f4");
    });


    //Setting event handler for the start button
    $("#start-replay").click(function (event) {
        var start = $("#from").val() || DEFAULT_START;
        var end = $("#to").val() || DEFAULT_END;

        //Example hgserve raw file url:
        // http://localhost:8000/raw-file/bd1acca4ed1f/.hgignore

        if (!$("#username").val() && !$("#repo").val()) {
            $("#file").html("Username and repository are required.");
        } else {
            var file = "https://api.github.com/repos/" + $("#username").val() + "/" + $("#repo").val();

            $.get(file, function (data) {
                var range = "changes: " + start + " - " + end;
                var html = template({range: range, fileContents: data});
                $("#file").html(html);
            });

        }
    });
});
