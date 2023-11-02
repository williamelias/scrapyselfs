from fastapi import FastAPI,Request
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:4200",
    "http://localhost:8080",
    "localhost*"
]

app.add_middleware(
    TrustedHostMiddleware,allowed_hosts=["*"]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def execute_request(request:Request):
    print(request['headers'][1])
    return {'message': "Hello my dear;"}

@app.post(path='/validate')
async def validate(data:dict,request:Request):
    data_keys = data.keys()
    needed_fields = ['url','integrationType','withProxy']
    if set(data_keys).difference(set(needed_fields)):
        return {'error': 'Needed fields are:' + needed_fields }
    
    return {'message': 'Are you ok broh?'}