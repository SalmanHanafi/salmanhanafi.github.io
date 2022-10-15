$(document).ready(() => {
    $("td").click(function (event) {
        alert("Berisi " + $(this).html() + " !");
    });
    $("th").click(function (event) {
        alert("Berisi " + $(this).html() +" !");
    });
});
