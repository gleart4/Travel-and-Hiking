
console.log("                           hiiiiiiiiii <3");
console.log("--------------------------------------------------------------");

let photo = document.getElementById("photo1");

let offGrid = document.querySelector(".off-grid");
offGrid.addEventListener("click", function(){
    photo.src="../imazhe/wp6506297-mountain-lake-ultra-hd-wallpapers.jpg"

    uptadeNavigation(offGrid, "01");

    title1.textContent="TO ENDURE OR";
    title2.textContent="TO EXPLORE";
});

let features = document.querySelector(".features");
features.addEventListener("click", function() {
    photo.src="../imazhe/wp8982698-4k-mountain-wallpapers.jpg";

    uptadeNavigation(features, "02");

    title1.textContent="KINGDOM OF";
    title2.textContent="FORTRESSES";
    desc1.textContent="How diverse and far-flung Iron Age chiefdoms united to challenge the Assyrian Empire";
});

let exploring = document.querySelector(".exploring");
exploring.addEventListener("click", function(){
    photo.src="../imazhe/907891-download-wallpaper-3840x2160-mountain-peak-tourists-trekking-nature-4k-uhd-169-hd-background.jpg";

    uptadeNavigation(exploring, "03");

    title1.textContent="OFF THE GRID";
    title2.textContent="San Agustín, Colombia";
    desc1.textContent="“Walking is a man's best medicine.” — Hippocrates";
});

let musical = document.querySelector(".musical");
musical.addEventListener("click", function(){
    photo.src="../imazhe/wp4291604.jpg"

    uptadeNavigation(musical, "04");

    title1.textContent="MUSIC OF TIMES";
    title2.textContent="Whimsical Sounds from the Mountains";
    desc1.textContent="“Walking is a man's best medicine.” — Hippocrates";
});

let trending=document.querySelector(".trending");
trending.addEventListener("click", function(){
    photo.src="../imazhe/wp9384871.jpg"

    uptadeNavigation(trending, "05");

    title1.textContent="TRENDING";
    title2.textContent="Secrets of the Seven Wonders";
    desc1.textContent="Carry as little as possible, but choose that little with care.";
});


let pageNumber=document.getElementById("page-number");
let slideOptions=document.querySelectorAll(".slide-option");

function uptadeNavigation(selectedOption, number){
    pageNumber.textContent=number+ " / 05";

    slideOptions.forEach(function(option) {
        option.classList.remove("active");
    });
    selectedOption.classList.add("active");
}

let title1 = document.getElementById("main-title1");
let title2 = document.getElementById("main-title2");
let desc1 = document.getElementById("main-description");