<?PHP

$mysqli = new mysqli("localhost", "root", "root", "excercise_db");
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$obj = json_decode($_GET["x"], false);
// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
} else {
	//echo "Connected successfully";
}

// sql to create table
/*$sql = "CREATE TABLE sets (
  id int PRIMARY KEY,
  name varchar(32),
  picture varchar(16)
)";

if ($mysqli->query($sql) === TRUE) {
    echo "Table sets created successfully";
} else {
    echo "Error creating table: " . $mysqli->error;
}

$sql = "INSERT INTO sets (id, name, picture) VALUES
(1, 'Rowing machine', 'img/set01.jpg'),
(2, 'Pull up', 'img/set02.jpg'),
(3, 'Seated leg curl machine', 'img/set03.jpg'),
(4, 'Chest fly machine', 'img/set04.jpg'),
(5, 'Seated hip abductor machine', 'img/set05.jpg'),
(6, 'Biceps Curl', 'img/set06.jpg'),
(7, 'One arm cable lateral raise', 'img/set07.jpg'),
(8, 'High cable chest fly', 'img/set08.jpg'),
(9, 'Rowing machine', 'img/set09.jpg'),
(10, 'Leg press', 'img/set10.jpg')";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}
 */
$id =  $_GET["id"];
$statement = $mysqli->prepare("SELECT id, name, picture FROM sets WHERE id='$id'");
$statement->execute(); 
$result = $statement->get_result(); 
echo json_encode(($result->fetch_assoc())); 
$mysqli->close();

?>

