"use strict";

var DEFAULT_START = "000000000000";
var DEFAULT_END = "tip";


$(window).load(function () {
    var source = $("#file-template").html();
    var template = Handlebars.compile(source);
    var html = template({file: "File.txt"});
    $("#file").append(html);
});