import uvicorn
from fastapi import FastAPI

app = FastAPI()

d = {}
file = open("PLZO_CSV_LV95.csv", encoding="UTF-8")
next(file)

for line in file:
    data = line.strip().split(";")
    ortschaftsname = data[0]
    plz = data[1]
    zusatzziffer = data[2]
    gemeindename = data[3]
    bfs = data[4]
    kanton = data[5]
    e = data[6]
    n = data[7]
    sprache = data[8]
    d[gemeindename] = {"Ortschaftsname": ortschaftsname,
              "Postleitzahl": plz,
              "Zusatzziffer": zusatzziffer,
              "BFS-Nummer": bfs,
              "Kanton": kanton,
              "Ost": e,
              "Nord": n,
              "Sprache": sprache}
@app.get("/")
async def root(gemeindename: str):
    return d[gemeindename]

uvicorn.run(app, host="127.0.0.1", port=8000)