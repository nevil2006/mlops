from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def home():
    return {"Hello": "World"}
@app.get("/hello")
def hello():
    return {"Hello": "FastAPI"}