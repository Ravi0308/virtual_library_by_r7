
document.getElementById('recommendation-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission
  const userInput = document.getElementById('userInput').value;

  try {
    const response = await fetch('/recommend_books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `user_input=${encodeURIComponent(userInput)}`
    });

    const recommendations = await response.json();
    console.log('Recommendations from backend:', recommendations); // Log recommendations received from the backend
    displayRecommendations(recommendations);
  } catch (error) {
    console.error('Error getting recommendations:', error);
  }
});

function displayRecommendations(recommendations) {
  const recommendationList = document.getElementById('recommendations');
  recommendationList.innerHTML = ''; // Clear previous recommendations

  recommendations.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author}`;
    recommendationList.appendChild(listItem);
  });
}

