var ebooksContainer; // Declare ebooksContainer globally

document.addEventListener("DOMContentLoaded", function () {
  ebooksContainer = document.getElementById("ebooks-container"); // Assign ebooksContainer after DOM content has loaded

  var booksData = [
    //self improvemnet book
    { name: "I wish i was an extrovert ", image: "./media/i-wish-i-was-an-extrovert.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/I-Wish-I-Was-An-Extrovert-PDF-Book.pdf", category: "self Improvment" },
    { name: "miracle Morning ", image: "./media/miracle-morningjpg.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/The-Miracle-Morning.pdf", category: "self Improvment" },
    { name: "secrets of millionaire mind", image: "./media/secret-of-mjpg.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Secrets-Of-The-Millionaire-Mind.pdf", category: "self Improvment" },
    { name: "emotional intelligence", image: "./media/emotional-intteligence.png", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/emotional-intelligence.pdf", category: "self Improvment" },
   

    // bussiness and career 
    { name: "Millionaire Shortcut", image: "./media/millionaire-shortcut.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/THE%20MILLIONAIRE%20SHORTCUT.pdf", category: "Bussiness & Career" },
    { name: "fintech for dummies", image: "./media/fintech.jpg", infoUrl: "https://www.amazon.com/FINTECH-Dummies-Business-Personal-Finance/dp/1119427266?crid=3PG5RTD8UGHLM&keywords=Fintech+for+Dummies&qid=1701374421&sprefix=fintech+for+dummies,aps,293&sr=8-1&linkCode=sl1&tag=pdfbookstor0e-20&linkId=e530a61dc6c3be572a09ba021b106053&language=en_US&ref_=as_li_ss_tl", category: "Bussiness & Career" },
    { name: "Gym launch secrets", image: "./media/gym.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/gym-launch-secrets.pdf", category: "Bussiness & Career" },
    { name: "basic accounting for small business", image: "./media/accounting.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Basic-Accounting-for-Small-Business.pdf", category: "Bussiness & Career" },
    

    // Academic
    { name: "like a house on fire", image: "./media/like-a-house-on-fire.jpg ", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Like-A-House-On-Fire-student-doc.pdf", category: "Acedemic & Education" },
    { name: "best practices for accounts payable", image: "./media/account-payable.jpg", infoUrl: "https://pdfdrive.com.co/8-download-academic-education-pdf/", category: "Acedemic & Education" },
    { name: "cracking code wiht Python ", image: "./media/python.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Cracking-Codes-with-Python.pdf", category: "Acedemic & Education" },
    { name: "HC verma volume-1", image: "./media/HC-VERMAjpg.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/HC-Verma-Concepts-of-Physics-Volume-1.pdf", category: "Acedemic & Education" },
    // Add more Acedemic & Education books as needed

    // Motivation Books
    { name: "Rich Dad Poor Dad", image: "./media/rich-dad-poor-dad.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/rich-dad-poor-dad-PDFdrive.com.co.pdf", category: "Financial" },
    { name: "a happy pocket full of money", image: "./media/happy-packet.jpg", infoUrl: "https://pdfdrive.com.co/a-happy-pocket-full-of-money-pdf/", category: "Financial" },
    { name: "Indian Economy ", image: "./media/indian-economy.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Indian-economy-by-Ramesh-Singh-PDF.pdf", category: "Financial" },
    { name: "the psychology of money", image: "./media/psyco-of-money .jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/The-Psychology-of-Money.pdf", category: "Financial" },


// Add more Most Searched books as needed
{ name: "Rich Dad Poor Dad", image: "./media/rich-dad-poor-dad.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/rich-dad-poor-dad-PDFdrive.com.co.pdf", category: "most Searched" },
    // { name: "To Kill a Mockingbird", image: "./media/book1.webp", infoUrl: "to-kill-a-mockingbird.html", category: "most Searched" },
    { name: "secrets of millionaire mind", image: "./media/secret-of-mjpg.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Secrets-Of-The-Millionaire-Mind.pdf", category: "most Searched" },
    { name: "the psychology of money", image: "./media/psyco-of-money .jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/The-Psychology-of-Money.pdf", category: "most Searched" },
    { name: "The Great Gatsby", image: "./media/book1.webp", infoUrl: "great-gatsby.html", category: "most Searched" },
    
    //most sellig book
    { name: "Rich Dad Poor Dad", image: "./media/rich-dad-poor-dad.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/rich-dad-poor-dad-PDFdrive.com.co.pdf", category: "Top Selling" },
    // { name: "The Lord of the Rings", image: "./media/book1.webp", infoUrl: "lord-of-the-rings.html", category: "Top Selling" },
    { name: "secrets of millionaire mind", image: "./media/secret-of-mjpg.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/Secrets-Of-The-Millionaire-Mind.pdf", category: "Top Selling" },
    { name: "The Da Vinci Code", image: "./media/book1.webp", infoUrl: "da-vinci-code.html", category: "Top Selling" },
    { name: "HC verma volume-1", image: "./media/HC-VERMAjpg.jpg", infoUrl: "https://pdfdrive.com.co/wp-content/pdfh/HC-Verma-Concepts-of-Physics-Volume-1.pdf", category: "Top Selling" }
    
  ];

  function displayBooks(category) {
    // Clear previous books
    ebooksContainer.innerHTML = "";
  
    // Remove existing category heading if it exists
    var existingCategoryHeading = document.querySelector(".category-heading");
    if (existingCategoryHeading) {
      existingCategoryHeading.parentNode.removeChild(existingCategoryHeading);
    }
  
   
    // Filter books based on category
var filteredBooks;
if (category === "All") {
  filteredBooks = booksData; // Display all books
} else {
  filteredBooks = booksData.filter(function (book) {
    return book.category === category;
  });
}


    // Display category name
    var categoryHeader = document.createElement("h2");
    categoryHeader.textContent = category + " Books";
    categoryHeader.classList.add("category-heading");
    ebooksContainer.parentNode.insertBefore(categoryHeader, ebooksContainer);
  
    // Display filtered books
    filteredBooks.forEach(function (book) {
      var bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
      
      var bookCover = document.createElement("img");
      bookCover.src = book.image;
      bookCover.alt = book.name;
      
      var bookName = document.createElement("p");
      bookName.textContent = book.name;
      
      var bookCategory = document.createElement("p");
      bookCategory.textContent = "Category: " + book.category;
      
      var readButton = document.createElement("button");
      readButton.textContent = "Read Book";
      readButton.classList.add("read-button");
      
      readButton.addEventListener("click", function() {
        window.location.href = book.infoUrl; // Redirect to book info page
      });
      
      bookDiv.appendChild(bookCover);
      bookDiv.appendChild(bookName);
      bookDiv.appendChild(bookCategory); // Append category after the book name
      bookDiv.appendChild(readButton); // Append the read button
      
      ebooksContainer.appendChild(bookDiv);
      readButton.addEventListener("click", function() {
        window.location.href = book.infoUrl; // Redirect to book info page
      });
      
      bookDiv.appendChild(readButton);
    });
    
    
    
  }
  
  

  function handleCategoryClick(category) {
    displayBooks(category);
  }

  // Set up event listener for category buttons
  document.getElementById("categoryButton").addEventListener("click", function () {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
  });

  // Event listener for clicking outside the dropdown to close it
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".category-button")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  });

  
// Event listeners for category buttons
document.getElementById("selfImprovment").addEventListener("click", function () {
  handleCategoryClick("self Improvment");
  closeDropdown(); // Close the dropdown after selecting a category
});

document.getElementById("Bussiness_career").addEventListener("click", function () {
  handleCategoryClick("Bussiness & Career");
  closeDropdown(); // Close the dropdown after selecting a category
});

document.getElementById("academic").addEventListener("click", function () {
  handleCategoryClick("Acedemic & Education");
  closeDropdown(); // Close the dropdown after selecting a category
});

document.getElementById("Financial").addEventListener("click", function () {
  handleCategoryClick("Financial");
  closeDropdown(); // Close the dropdown after selecting a category
});




document.getElementById("mostSearched").addEventListener("click", function () {
  handleCategoryClick("most Searched");
  closeDropdown(); // Close the dropdown after selecting a category
});

document.getElementById("all").addEventListener("click", function () {
  handleCategoryClick("All");
  closeDropdown(); // Close the dropdown after selecting a category
});
document.getElementById("mostSelling").addEventListener("click", function () {
  handleCategoryClick("Top Selling");
  closeDropdown(); // Close the dropdown after selecting a category
});

function closeDropdown() {
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.remove("show");
}

  // Initial display of all books
  displayBooks("All");
});
