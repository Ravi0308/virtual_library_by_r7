document.addEventListener("DOMContentLoaded", function() {
  // Get the container element where books will be inserted
  var ebooksContainer = document.getElementById("ebooks-container");

  // Array of book data including name and image URL
  var booksData = [
    { name: "The Great Gatsby", image: "book1.webp", infoUrl: "great-gatsby.html" },
    { name: "To Kill a Mockingbird", image: "book1.webp", infoUrl: "mockingbird.html" },
    { name: "The Great Gatsby", image: "book1.webp", infoUrl: "great-gatsby.html" },
    { name: "To Kill a Mockingbird", image: "book1.webp", infoUrl: "mockingbird.html" },
    { name: "The Great Gatsby", image: "book1.webp", infoUrl: "great-gatsby.html" },
    { name: "To Kill a Mockingbird", image: "book1.webp", infoUrl: "mockingbird.html" },
    { name: "The Great Gatsby", image: "book1.webp", infoUrl: "great-gatsby.html" },
    { name: "To Kill a Mockingbird", image: "book1.webp", infoUrl: "mockingbird.html" },
    // Add more book data as needed
  ];

  // Loop through the array and create elements for each book
  booksData.forEach(function(book) {
    // Create a container for each book
    var bookContainer = document.createElement("div");
    bookContainer.classList.add("book");
    bookContainer.onclick = function() {
      window.open(book.infoUrl, "_blank");
    };

    // Create an image element for the book
    var bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.name;

    // Create a paragraph element for the book name
    var bookName = document.createElement("p");
    bookName.textContent = book.name;

    // Append the image and name to the book container
    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookName);

    // Append the book container to the ebooks container
    ebooksContainer.appendChild(bookContainer);
  });
});
