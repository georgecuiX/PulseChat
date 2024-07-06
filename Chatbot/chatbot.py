from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message')
    # Simple echo bot response
    response_message = f"Bot: You said '{user_message}'"
    return jsonify({'message': response_message})

if __name__ == '__main__':
    app.run(port=5000)
