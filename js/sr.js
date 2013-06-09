"use strict";

$(window).load(function () {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var html = template({file: "File.txt"});
});