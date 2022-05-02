let film_list = document.getElementById("film-list");
var moviedata;
function filter_movies(selected_year) 
{
    film_list.innerHTML = "";
    if(selected_year.value == "null-none")
    {
        show_movies(moviedata);
    }
    
    for (var i = 0; i < movieInfo.length; i++) {
        if (movieInfo[i].year == selected_year.value) {
            
            var div_col = document.createElement("DIV");
            div_col.className = "col-lg-3 col-md-6 col-sm-12 mt-3";

            var div1 = document.createElement("DIV");
            div1.className = "card ";

            var div2 = document.createElement("DIV");
            div2.className = "card-body";
            div2.style.textAlign = "center";

            var img = document.createElement("IMG");
            var tag = document.createElement("H4");
            tag.className = "card-title";
            tag.style.backgroundColor = "gold";

            var tag_p = document.createElement("P");
            tag_p.className = "card-text";
            var tag_p1 = document.createElement("P");
            tag_p1.className = "card-text";
            var tag_p2 = document.createElement("P");
            tag_p2.className = "card-text";
            var tag_p3 = document.createElement("P");
            tag_p3.className = "card-text";
            var tag_p4 = document.createElement("P");
            tag_p4.className = "card-text";
            var tag_p5 = document.createElement("P");
            tag_p5.className = "card-text";
            img.src = movieInfo[i].info.image_url;
            img.id = "blackwhite";
            img.className = "fluid card-img-top";
            tag.innerHTML = movieInfo[i].title;
            tag_p1.innerHTML = "Year : " + movieInfo[i].year;
            tag_p2.innerHTML = "Dirctors : " + movieInfo[i].info.directors;
            tag_p.innerHTML = "Actors : " + movieInfo[i].info.actors;
            tag_p3.innerHTML = "Rating : " + movieInfo[i].info.rating;
            tag_p4.innerHTML = "Genres:" + movieInfo[i].info.genres;
            tag_p5.innerHTML = "Summery : " + movieInfo[i].info.plot;


            ////////////////////////////////////////////////
            film_list.appendChild(div_col);
            div_col.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(div2);
            div2.appendChild(tag);
            div2.appendChild(tag_p1);
            div2.appendChild(tag_p3);
            div2.appendChild(tag_p4);
            div2.appendChild(tag_p2);
            div2.appendChild(tag_p);
            div2.appendChild(tag_p5);


        }
    }

}

function show_movies(movieInfo) {
    for (var i = 0; i < movieInfo.length; i++) {


        var col = document.createElement("DIV");
        col.className = "col-lg-3 col-md-6 col-sm-12 mt-3";

        var div1 = document.createElement("DIV");
        div1.className = "card";

        var div2 = document.createElement("DIV");
        div2.className = "card-body";
        div2.style.textAlign = "center";
        var img = document.createElement("IMG");
        var tag = document.createElement("H4");
        tag.style.backgroundColor = "gold";

        tag.className = "card-title";
        var tag_p = document.createElement("P");
        tag_p.className = "card-text";
        var tag_p1 = document.createElement("P");
        tag_p1.className = "card-text";
        var tag_p2 = document.createElement("P");
        tag_p2.className = "card-text";
        var tag_p3 = document.createElement("P");
        tag_p3.className = "card-text";
        var tag_p4 = document.createElement("P");
        tag_p4.className = "card-text";
        var tag_p5 = document.createElement("P");
        tag_p5.className = "card-text";
        img.src = movieInfo[i].info.image_url;
        img.id = "blackwhite";
        img.className = "fluid card-img-top";
        img.style.height = "100px !important"
        tag.innerHTML = movieInfo[i].title;
        tag_p1.innerHTML = "Year : " + movieInfo[i].year;
        tag_p2.innerHTML = "Dirctors : " + movieInfo[i].info.directors;
        tag_p.innerHTML = "Actors : " + movieInfo[i].info.actors;
        tag_p3.innerHTML = "Rating : " + movieInfo[i].info.rating;
        tag_p4.innerHTML = "Genres : " + movieInfo[i].info.genres;
        tag_p5.innerHTML = "Summery : " + movieInfo[i].info.plot;


        ////////////////////////////////////////////////
        film_list.appendChild(col);
        col.appendChild(div1);
        div1.appendChild(img);
        div1.appendChild(div2);
        div2.appendChild(tag);
        div2.appendChild(tag_p1);
        div2.appendChild(tag_p3);
        div2.appendChild(tag_p4);
        div2.appendChild(tag_p2);
        div2.appendChild(tag_p);
        div2.appendChild(tag_p5);


    }
}

function myDisplay(movieInfo_string) {
    check_array = [];
    movieInfo = JSON.parse(movieInfo_string);
    moviedata = movieInfo;
    /*if(moviedata == movieInfo)
    {
        alert("yeeeeeeeeeeeees");
    }*/
    var movieInfo_tag = document.getElementById("year");
    for (var i = 0; i < movieInfo.length; i++) {

        if (!check_array.includes(movieInfo[i].year)) {
            check_array.push(movieInfo[i].year);
        }
    }
    show_movies(movieInfo);
    check_array.sort();
    for (var i = 0; i < check_array.length; i++) {
        var option = document.createElement("option")
        option.innerHTML = check_array[i];
        option.value = check_array[i];
        movieInfo_tag.appendChild(option);
    }
}

async function read_info(url) {
    let x = await fetch(url);
    let y = await x.text();
    myDisplay(y);
}

function set_year() {
    var path = "https://raw.githubusercontent.com/farzadForoozanfar/Website-design-course-comprehensive/main/Assignment18(IMDB)/moviedata.json"
    var movieInfo = read_info(path);
}

set_year();