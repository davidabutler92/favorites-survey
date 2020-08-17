$(document).ready(function() {
  $("#survey").click(function(event) {
    event.preventDefault();

    const iceCream = $("#fav1").val();
    const favSong = $("#fav2").val();
    const favWeather = $("#fav3").val();
    // const results = [iceCream, favSong, favWeather];
    const results = [iceCream, favSong, favWeather];

    const newArray = [];
    newArray.push(results[1]);
    newArray.push(results[0]);
    newArray.push(results[2]);
    // console.log(newArray);
  });
});