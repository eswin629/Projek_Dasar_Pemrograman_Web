var tutorial1 = document.getElementById("lead-1");
tutorial1.innerText = "Skills:";

var paragraf = document.getElementsByClassName("lead");
    setInterval(function () {
        paragraf[0].style.color = "red";
        paragraf[1].style.color = "green";
        paragraf[2].style.color = "blue";
        paragraf[5].style.color = "blue";
        paragraf[4].style.color = "green";
        paragraf[3].style.color = "red";

        setTimeout(function () {
            paragraf[0].style.color = "black";
            paragraf[1].style.color = "black";
            paragraf[2].style.color = "black";
            paragraf[3].style.color = "black";
            paragraf[4].style.color = "black";
            paragraf[5].style.color = "black";
        }, 500)
    }, 1000);