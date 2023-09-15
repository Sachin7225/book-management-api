const express = require("express");
const books = express();
const db = require("./dataset");

// Designing API for getting all the books
books.get("/", (req, res) => {
    return res.json({ books: db.books });
});

// Designing API for getting specific book by ISBN
books.get("/is/:isbn", (req, res) => {
    const getspecificbook = db.books.filter(
        (book) => book.ISBN === req.params.isbn
    );
    if (getspecificbook.length === 0) {
        return res.json({ error: `NO BOOKS FOUND FOR ISBN OF ${req.params.isbn}` });
    }
    return res.json({ books: getspecificbook });
});

//list of books based on category

books.get("/c/:category", (req, res) => {
    const getspecificbook = db.books.filter(
        (book) => book.category.includes(req.params.category)
    );

    if (getspecificbook.length === 0) {
        return res.json({ error: `No books found for category: ${req.params.category}` });
    }

    return res.json({ books: getspecificbook });
});


books.get("/l/:lan", (req, res) => {
    const getspecificbook = db.books.filter(
        (book) => book.lan===(req.params.lan)
    );

    if (getspecificbook.length === 0) {
        return res.json({ error: `No books found for category: ${req.params.lan}` });
    }

    return res.json({ books: getspecificbook });
});



//designing api for author

books.get("/authors",(req,res)=>{
    return res.json({authors : db.author})
})


//designing api for get all authors based on books

books.get("/author/book/:isbn",(req,res)=>{
    const getspecificauthor = db.author.filter(
        (author) => author.books.includes(req.params.isbn)
    )
    if(getspecificauthor === 0){
        return res.json({error:"no book found"})
    }
    return res.json({authors:getspecificauthor})
})



//get all the publication
books.get("/publication",(req,res)=>{
    return res.json({Publications:db.publication})
})


//specific publication based on id

books.get("/publication/:id", (req, res) => {
    const getspecificpublication = db.publication.filter(
        (pub) => pub.id === parseInt(req.params.id)
    );

    if (getspecificpublication.length === 0) {
        return res.json({ error: "No publication found" });
    }

    return res.json({ publication: getspecificpublication });
});

books.get("/author/:id", (req, res) => {
    const getspecific = db.author.filter(
        (author) => author.id === parseInt(req.params.id)
    );

    if (getspecific.length === 0) {
        return res.json({ error: "No publication found" });
    }

    return res.json({ publication: getspecific });
});




books.listen(3000, () => {
    console.log("Server has started");
});
