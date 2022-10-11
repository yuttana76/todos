#Get all todo
GET /api/todo/

#Delete
DELETE /api/todo/:id

#Update
PATCH /api/todo/:id
Body
{
"status":"pending",
"description":"yyyy"
}

#Create
POST /api/todo/ HTTP/1.1
Body
{
"status":"waiting",
"description":"React."
}
