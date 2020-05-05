function onClickAndroid() {
    console.log("android")
    document.getElementById("imgID").src = "images/Android-Logo.jpg";
    var exploreDebateLink = document.getElementById("exploreDebateLink");
    exploreDebateLink.innerHTML = "Android Home";
    exploreDebateLink.style.backgroundColor = "#a4c93b";
    exploreDebateLink.style.background.href = "https://www.android.com/";
    document.body.style.backgroundColor = "#a4c93b";
}


function onClickApple() {
    console.log("Apple")
    document.getElementById("imgID").src = "images/Apple-Logo.jpg";
    var exploreDebateLink = document.getElementById("exploreDebateLink");
    exploreDebateLink.innerHTML = "Apple Home";
    exploreDebateLink.style.backgroundColor = "#b6bcca";
    exploreDebateLink.style.background.href = "https://www.apple.com/";
    document.body.style.backgroundColor = "#b6bcca";
}