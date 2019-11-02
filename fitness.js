var carousel_id = 1;
function add_carousel() {
  console.log("working here");
  var carousel =
    '<div id="carouselExampleControls' +
    carousel_id +
    '" class="carousel slide" data-ride="carousel" data-interval="false"> <div class="carousel-inner" id="carousel-inner"><div class="carousel-item active"><img class="d-block " src="img/set01.jpg" alt="Second slide" /><div class="carousel-caption d-none d-md-block"><h5>Rowing machine</h5></div></div></div><a class="carousel-control-prev"href="#carouselExampleControls' +
    carousel_id +
    '"role="button"data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true" ></span><img src="img/left.png" alt="" /><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleControls' +
    carousel_id +
    '" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><img src="img/right.png" alt="" /><span class="sr-only">Next</span></a></div>';
  show_exercises();
  carousel_id++;

  return carousel;
}
function add_inputs() {
  var inputs =
    '<div class="inputs"><label for="program_name">Reps</label><input type="text" name="reps" id="reps" /><br/><label for="program_name">Sets</label><input type="text" name="sets" id="sets" /></div>';
  return inputs;
}

function new_exercise() {
  var exercise_card =
    "<div class='flex-container'>" + add_carousel() + add_inputs() + "</div>";

  $("#new_ex").after(exercise_card);
}
function show_exercises() {
  var i = 2;
  for (i = 2; i <= 10; i++) {
    const Http = new XMLHttpRequest();
    const url = "exercise.php?id=" + i;
    Http.open("GET", url, true);
    Http.send();
    Http.onreadystatechange = function() {
      if (this.readyState == 4) {
        var exercise = JSON.parse(this.responseText);
        var title =
          '<div class="carousel-caption d-none d-md-block"><h5>' +
          exercise.name +
          "</h5></div>";
        var item =
          ' <div class="carousel-item "><img class="d-block" src="' +
          exercise.picture +
          '" alt=""></img>' +
          title +
          "</div>";
        document.getElementById("carousel-inner").innerHTML += item;
      }
    };
  }
}
