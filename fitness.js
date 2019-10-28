function new_excercise() {
  var label1 = '<label for="program_name">Reps</label>';
  var input1 = '<input type="text" name="reps" id="reps" /><br/>';
  var label2 = '<label for="program_name">Sets</label>';
  var input2 = '<input type="text" name="sets" id="sets" /><br/>';

  document.getElementById("new_ex").innerHTML +=
    label1 + input1 + label2 + input2;

  const Http = new XMLHttpRequest();
  const url = "/excercise.php?id=5";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = e => {
    console.log(Http.responseText);
    var data = Http.responseText;
  };
}
