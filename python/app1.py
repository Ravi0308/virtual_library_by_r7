from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommended')
def recommend_ui():
    return render_template('recommended.html')

@app.route('/recommend_books', methods=['POST'])
def recommend_books():
    user_input = request.form.get('userInput')
    # Dummy recommendations
    recommendations = [
        {'title': 'Recommended Book 1', 'author': 'Recommended Author 1'},
        {'title': 'Recommended Book 2', 'author': 'Recommended Author 2'},
        {'title': 'Recommended Book 3', 'author': 'Recommended Author 3'},
        # Add more recommended books as needed
    ]
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
