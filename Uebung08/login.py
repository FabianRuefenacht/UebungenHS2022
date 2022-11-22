import uvicorn
from fastapi import FastAPI, Depends, status, Request, Form
from fastapi.responses import RedirectResponse, HTMLResponse
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException
from fastapi.templating import Jinja2Templates
import sqlalchemy
import databases

space = [""]
app = FastAPI()
templates = Jinja2Templates(directory="templates/")

manager = LoginManager("2345678tfvbnjkiuztrfghjkjhgertzu54rtzuiouztrtz", token_url="/auth/login", use_cookie=True)
manager.cookie_name = "DiessolleineindeutigerkeyseindernirgendsaufderWeltvorkommt_deswegenistersolang"

database = databases.Database('sqlite:///datenbank.db')
engine = sqlalchemy.create_engine('sqlite:///datenbank.db',
            connect_args={"check_same_thread": False})
metadata = sqlalchemy.MetaData()

notes = sqlalchemy.Table(
    "notes", metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("user", sqlalchemy.String),
    sqlalchemy.Column("title", sqlalchemy.String),
    sqlalchemy.Column("text", sqlalchemy.String)
)

metadata.create_all(engine)

DB = {"Musterli": {"firstname": "Max",
                   "lastname": "Muster",
                   "password": "a",
                   "username": "Musterli"},
    "Hansi": {"firstname": "Hans",
                   "lastname": "Wurst",
                   "password": "b",
                   "username": "Hansi"}
    }


@manager.user_loader()
def load_user(username: str):
    user = DB.get(username)
    return user

@app.post("/auth/login")
def login(data: OAuth2PasswordRequestForm = Depends()):
    username = data.username
    password = data.password
    user = load_user(username)

    if not user:
        raise InvalidCredentialsException
    if user['password'] != password:
        raise InvalidCredentialsException

    access_token = manager.create_access_token(
        data= {"sub": username}
    )


    resp = RedirectResponse(url="/new", status_code=status.HTTP_302_FOUND)
    manager.set_cookie(resp, access_token)

    return resp

@app.get("/login")
def login():
    file = open("templates/login.html", encoding="UTF-8")
    data = file.read()
    file.close()
    return HTMLResponse(content=data)

@app.get("/new")
async def create_note(request: Request, user=Depends(manager)):
    return templates.TemplateResponse('new.html', context={'request': request})

@app.post("/new")
async def post_note(request: Request, titel=Form(), text=Form(), user = Depends(manager)):
    query = notes.insert().values(title=titel, text=text, user = user["username"])
    print(user)
    myid = await database.execute(query)
    return templates.TemplateResponse('new.html', context={'request': request})

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.get("/users/{user}" )
async def read_notes(user: str):
    query = notes.select().where(notes.c.user== user)
    return await database.fetch_all(query)



uvicorn.run(app, host="localhost", port=8000)
