from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root():
    return {"message": "API is running"}

@app.get("/t")
def route_t():
    return {"Hello": "World"}

@app.get("/hello")
def route_hello():
    return {"Hello": "FastAPI"}

@app.get("/name")
def route_name():
    return {"Name": "your name"}