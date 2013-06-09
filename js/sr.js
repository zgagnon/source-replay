"use strict";

$(window).load(function () {
    var source = $("#file-template").html();
    var template = Handlebars.compile(source);
    var html = template({file: "File.txt"});
});