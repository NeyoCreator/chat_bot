from flask import Flask 

app = Flask(__name__)

#MEMBERS API ROUTE
@app.route("/members")
def memebers():
    return{"members": ["Member1","Member2","Member3"]}


if __name__ == "__main__":
    app.run(debug=True)