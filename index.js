const express = require('express');
const app = express();

const port = 3010;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});



let authors = [
  {
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"],
  
   
  },
  {
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
    
    
  },
  {
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest" , "zfkhefhzoe"],
   
  },
]

app.get('/',(req,res)=>{
  res.send("sdfwxdv")
})
// app.get('/authors/1/', (req, res) => {
//    res.send(authors[0].name+','+authors[0].nationality+' ,'+authors[0].books  )

// });
// app.get('/authors/2/books', (req, res) => {
//    res.send(authors[1].name +', '+authors[1].nationality+','+authors[1].books )

// });
// app.get('/authors/3/books', (req, res) => {
//    res.send(authors[2].name+','+authors[2].nationality+','+authors[2].books  )

// });
// app.get('/authors/4/books', (req, res) => {
//    res.send(authors[3].name+','+authors[3].nationality+','+authors[3].books   )

// });

// app.get('/authors/0/books',(req,res)=>{

//   res.send(` ${authors[0].books}`)
// })
// app.get('/authors/0/books',(req,res)=>{

//   res.send(` ${authors[1].books}`)
// })
// app.get('/authors/1/books',(req,res)=>{

//   res.send(` ${authors[2].books}`)
// })
// app.get('/authors/3/books',(req,res)=>{

//   res.send(` ${authors[4].books}`)
// })

app.get('/json/authors/:id',(req,res )=>{
 authorsName= authors[req.params.id].name ,
 country=authors[req.params.id].nationality

  res.json({
    authors: authorsName,
    countries: country
});

})

// app.get('/json/authors/:id/books',(req,res )=>{
//   booksName="",
 
//  booksName= authors[req.params.id].books;

//   res.json({
//     books:booksName, 
// })

// })