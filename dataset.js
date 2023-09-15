const books = [
    {
        ISBN : "12345book",
        title: "tesla",
        pubdate: "2023-05-04",
        lan: "en",
        numpage:250,
        auther:[1,2],
        publication:[1],
        category:["tech","space","education"]

    },
 

 {
   ISBN: "67890book",
   title: "The Art of Programming",
   pubdate: "2022-09-15",
   lan: "en",
   numpage: 320,
   auther: [3],
   publication: [2],
   category: ["technology", "programming"]
},

 {
   ISBN: "13579book",
   title: "Exploring the Cosmos",
   pubdate: "2023-01-20",
   lan: "en",
   numpage: 280,
   auther: [4],
   publication: [3],
   category: ["science", "space"]
},

 {
   ISBN: "24680book",
   title: "History of Ancient Rome",
   pubdate: "2021-11-10",
   lan: "en",
   numpage: 400,
   auther: [5],
   publication: [4],
   category: ["history"]
},

 {
   ISBN: "98765book",
   title: "The Great Gatsby",
   pubdate: "2022-03-30",
   lan: "en",
   numpage: 200,
   auther: [6],
   publication: [5],
   category: ["fiction", "classic"]
},

 {
   ISBN: "54321book",
   title: "Chemistry 101",
   pubdate: "2023-07-12",
   lan: "en",
   numpage: 180,
   auther: [7],
   publication: [6],
   category: ["science", "education"]
},

 {
   ISBN: "11223book",
   title: "The Art of Photography",
   pubdate: "2022-05-02",
   lan: "en",
   numpage: 240,
   auther: [8],
   publication: [7],
   category: ["art", "photography"]
},

 {
   ISBN: "99887book",
   title: "Green Energy Solutions",
   pubdate: "2023-04-18",
   lan: "en",
   numpage: 300,
   auther: [9],
   publication: [8],
   category: ["technology", "environment"]
},

 {
   ISBN: "76543book",
   title: "Shakespearean Sonnets",
   pubdate: "2022-12-05",
   lan: "en",
   numpage: 150,
   auther: [10],
   publication: [9],
   category: ["poetry", "literature"]
},

 {
   ISBN: "11235book",
   title: "The Solar System Explained",
   pubdate: "2023-06-25",
   lan: "en",
   numpage: 220,
   auther: [11],
   publication: [10],
   category: ["science", "space", "education"]
},

 {
    ISBN: "54321book",
    title: "Introduction to Artificial Intelligence",
    pubdate: "2022-08-10",
    lan: "en",
    numpage: 280,
    auther: [12],
    publication: [11],
    category: ["technology", "artificial intelligence"]
},

 {
    ISBN: "12345book",
    title: "The History of Mathematics",
    pubdate: "2023-03-12",
    lan: "en",
    numpage: 320,
    auther: [13],
    publication: [12],
    category: ["science", "mathematics"]
},

 {
    ISBN: "67890book",
    title: "Famous Artists of the Renaissance",
    pubdate: "2022-07-22",
    lan: "en",
    numpage: 260,
    auther: [14],
    publication: [13],
    category: ["art", "history"]
}
,
{
    ISBN: "13579book",
    title: "The Universe and Beyond",
    pubdate: "2023-02-28",
    lan: "en",
    numpage: 300,
    auther: [15],
    publication: [14],
    category: ["science", "space"]
},

{
    ISBN: "24680book",
    title: "Jane Eyre",
    pubdate: "2021-10-05",
    lan: "en",
    numpage: 320,
    auther: [16],
    publication: [15],
    category: ["fiction", "classic"]
},

 {
    ISBN: "98765book",
    title: "Computer Science Fundamentals",
    pubdate: "2022-04-15",
    lan: "en",
    numpage: 240,
    auther: [17],
    publication: [16],
    category: ["technology", "computer science"]
},

 {
    ISBN: "54321book",
    title: "World History: A Comprehensive Guide",
    pubdate: "2023-09-08",
    lan: "en",
    numpage: 350,
    auther: [18],
    publication: [17],
    category: ["history"]
},

 {
    ISBN: "11223book",
    title: "Contemporary Art Movements",
    pubdate: "2022-11-20",
    lan: "en",
    numpage: 280,
    auther: [19],
    publication: [18],
    category: ["art", "contemporary"]
},

 {
    ISBN: "99887book",
    title: "Renewable Energy Technologies",
    pubdate: "2023-08-14",
    lan: "en",
    numpage: 300,
    auther: [20],
    publication: [19],
    category: ["technology", "environment"]
},

 {
    ISBN: "76543book",
    title: "The Works of Edgar Allan Poe",
    pubdate: "2022-11-30",
    lan: "en",
    numpage: 200,
    auther: [21],
    publication: [20],
    category: ["fiction", "horror"]
},

 {
    ISBN: "11235book",
    title: "Astronomy for Beginners",
    pubdate: "2023-07-05",
    lan: "en",
    numpage: 220,
    auther: [22],
    publication: [21],
    category: ["science", "astronomy", "education"]
},

 {
    ISBN: "54321book",
    title: "Machine Learning Essentials",
    pubdate: "2022-09-20",
    lan: "en",
    numpage: 280,
    auther: [23],
    publication: [22],
    category: ["technology", "machine learning"]
}
]




const author = [
    {
        id : 1,
        name : "sachin",
        books: ["12345book","secretbook"]
    },
    {
        id:2,
        name :"elon musk",
        books:["12345book"]
    },
    {
        id: 11,
        name: "Emma Watson",
        books: ["classicbook", "fantasybook"]
    },
    {
        id: 12,
        name: "Daniel Johnson",
        books: ["sciencebook", "adventurebook"]
    },
    {
        id: 13,
        name: "Olivia Davis",
        books: ["romancebook"]
    },
    {
        id: 14,
        name: "James Wilson",
        books: []
    },
    {
        id: 15,
        name: "Sophia Martinez",
        books: ["12345book", "mysterybook", "cookbook"]
    },
    {
        id: 16,
        name: "Liam Taylor",
        books: ["historybook", "biographybook"]
    },
    {
        id: 17,
        name: "Ava Miller",
        books: ["selfhelpbook", "healthbook"]
    },
    {
        id: 18,
        name: "Noah Anderson",
        books: ["sciencefictionbook", "comedybook"]
    },
    {
        id: 19,
        name: "Isabella Brown",
        books: ["fantasybook", "adventurebook"]
    },
    {
        id: 20,
        name: "Mia Jones",
        books: ["romancebook", "mysterybook"]
    }
    
]

const publication = [
    {
        id:1,
        name :"writerx",
        books:["12345book"]
    }
]
module.exports = {books,author,publication}