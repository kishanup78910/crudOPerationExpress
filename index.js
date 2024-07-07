const express =require("express")
const app =express();


let book=[
    {
      "id": 1,
      "author": {
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
      }
    },
    {
      "id": 2,
      "author": {
        "name": "John Smith",
        "email": "john.smith@example.com"
      }
    },
    {
      "id": 3,
      "author": {
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com"
      }
    }
  ];
  
app.use(express.json)  

app.get("/",(req,res)=>{
    res.json(book)
})
//update
app.post('/books',(req,res)=>{
    console.log(req.body);
    const newbook = req.body;
    newbook.id = book.lengthj+4;
    book.push(newbook);
    res.status(201).json(newbook);
    
})


//update

app.listen(3000,()=>{
    console.log("server is up running at 3000")
})