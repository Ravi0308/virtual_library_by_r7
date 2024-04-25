

<?php

// Dummy recommendations
$recommendations = [
    ['title' => 'Recommended Book 1', 'author' => 'Recommended Author 1'],
    ['title' => 'Recommended Book 2', 'author' => 'Recommended Author 2'],
    ['title' => 'Recommended Book 3', 'author' => 'Recommended Author 3'],
    // Add more recommended books as needed
];

// Respond to AJAX request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['userInput'])) {
    header('Content-Type: application/json');
    echo json_encode($recommendations);
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Recommendations</title>
</head>
<body>
  <h1>Book Recommendations</h1>
  <form id="recommendation-form">
    <label for="userInput">Enter a Book Title:</label>
    <input type="text" id="userInput" name="userInput">
    <button type="submit">Get Recommendations</button>
  </form>
  <ul id="recommendations"></ul>

  <script src="script.js"></script>
</body>
</html>
