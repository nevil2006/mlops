from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def home():
    return {"Hello": "World"}
@app.get("/hello")
def hello():
    return {"Hello": "FastAPI"}
@app.get("/items/{item_id}")
def get_item(item_id: int):
    return {"item_id": item_id}
@app.get("/search")
def search(name: str = None, q: str = None):
    return {"name":name, "q":q}