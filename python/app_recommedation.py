from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load the pickled models and data
pt = pickle.load(open('pt.pkl', 'rb'))
books = pickle.load(open('books.pkl', 'rb'))
similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))

@app.route('/get-recommendations', methods=['POST'])
def get_recommendations():
    # Get book title from request JSON
    book_title = request.get_json()['bookTitle']
    # Use your machine learning model to generate recommendations
    recommendations = get_recommendations_from_model(book_title, pt, books, similarity_scores)
    return jsonify({'recommendations': recommendations})

def get_recommendations_from_model(book_title, pt, books, similarity_scores):
    """
    Generate book recommendations based on the given book title.
    
    Parameters:
    - book_title: Title of the book for which recommendations are sought.
    - pt: Your machine learning model or preprocessing transformer.
    - books: List of book titles in the dataset.
    - similarity_scores: Dictionary containing similarity scores between books.
    
    Returns:
    - List of recommended book titles.
    """
    similar_books = []
    for book in books:
        if book != book_title:
            similarity = similarity_scores[book][book_title]
            similar_books.append((book, similarity))
    # Sort similar books by similarity score in descending order
    similar_books.sort(key=lambda x: x[1], reverse=True)
    # Return top 10 recommended books
    return [book for book, _ in similar_books[:10]]

if __name__ == '__main__':
    app.run(debug=True)
