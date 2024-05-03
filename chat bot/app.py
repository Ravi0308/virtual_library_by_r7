from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    prompt = {
        "systemPrompt": "RolePlay as chatbot",
        "user": "summary of harry potter"
    }
    response = requests.post('https://fumes-api.onrender.com/llama3',
                             json={
                                 'prompt': prompt,
                                 "temperature": 0.75,
                                 "topP": 0.9,
                                 "maxTokens": 600
                             }, stream=True)
    chat_response = ""
    for chunk in response.iter_content(chunk_size=1024):
        if chunk:
            chat_response += chunk.decode('utf-8')
    return jsonify({'response': chat_response})

if __name__ == '__main__':
    app.run(debug=True)
