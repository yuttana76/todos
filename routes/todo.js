const router = require('express').Router();
let todoList= [
  {
    "id": 1,
    "description": "Home work math",
    "status":""
  },
  {
    "id": 2,
    "description": "Home work english",
    "status":"finish"
  }
]


// CREATE
router.post("/",(req,res)=>{
  // const newProduct = Product(req.body);
  try{
    
    let {description,status,note} = req.body
    let id =Number(todoList[todoList.length - 1].id)+1

    let savedtodo = {id,description,status,note}
    todoList.push((savedtodo))

    res.status(200).json(savedtodo);

  }catch(err){
    res.status(500).json(err)
  }

});

// / UPDATE
router.patch("/:id",(req,res)=>{

  try{

    const todoIndex = todoList.findIndex(todo=> todo.id==req.params.id)

    if(todoIndex===-1){
      res.status(202).json('Not found data..')
    }

    let {description,status,note} = req.body
    let updatedTodo = {id:Number(req.params.id),description,status,note}
    todoList[todoIndex]=updatedTodo
    res.status(200).json(updatedTodo)

  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }

});

// DELETE
router.delete("/:id",(req,res)=>{
  try{
    todoList = todoList.filter(todo=> todo.id!=req.params.id)
    res.status(200).json("deleted...")

  }catch(err){
    console.error(err);
    res.status(500).json(err)
  }
});


// GET PRODUCT
router.get("/find/:id", async (req,res)=>{
  try{
    res.status(200).json(todoList.find(todo =>todo.id===req.params.id))

  }catch(err){
    res.status(500).json(err)
  }
});

// GET ALL PRODUCTS
router.get("/", async (req,res)=>{
  try{

    res.status(200).json(todoList)

  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;