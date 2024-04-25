from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the pre-trained model and data from pickle files
with open('books.pkl', 'rb') as f:
    books = pickle.load(f)

with open('similarity_scores.pkl', 'rb') as f:
    similarity_scores = pickle.load(f)

@app.route('/get-recommendations', methods=['POST'])
def get_recommendations():
    """
    Handles POST requests for book recommendations.

    Expects the request body to contain a JSON object with the following key:
        - bookTitle (str): The title of the book for which recommendations are requested.

    Returns a JSON response with the following key:
        - recommendations (list): A list of recommended book titles.
    """

    try:
        data = request.get_json()
        book_title = data['bookTitle']

        # Ensure user input is not empty or whitespace
        if not book_title.strip():
            return jsonify({'error': 'Please enter a valid book title'}), 400

        # Find the index of the book in the books list (handle potential errors)
        try:
            book_index = books.index(book_title)
        except ValueError:
            return jsonify({'error': 'Book not found in our database'}), 404

        # Retrieve top N similar books (adjust N as needed)
        top_n = 10
        similar_indices = np.argsort(similarity_scores[book_index])[::-1][:top_n]

        recommendations = [books[i] for i in similar_indices]

        return jsonify({'recommendations': recommendations})

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': 'An internal server error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
