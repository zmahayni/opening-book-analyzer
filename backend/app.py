from flask import Flask, jsonify
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.get("/api/health")
    def health():
        return jsonify(status="ok", service="opening-book-analyzer")

    return app


app = create_app()


if __name__ == "__main__":
    app.run(port=5000, debug=True)
