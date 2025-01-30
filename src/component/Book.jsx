import React, { useEffect, useState } from 'react'
import BookItems from './BookItems'
import {addbook,findByOrderByPriceAsc, findByOrderByPriceDesc, findByOrderByTitleAsc, findByOrderByTitleDesc, getbook, updateBook } from '../Services/BookService'



function Book() {
  let [books, setBooks] = useState([])
  let [shoowForm,setShowForm]=useState(false)
  let[ selectedBook,setSelectedBook]=useState('')
  let [searchQuery,setSearchQuery]=useState('');
  let [book,setBook]=useState({title:'',author: '',price:0})


  useEffect(() => {


    getbook().then(data => {
      setBooks(data)
    })


    if(selectedBook)
    {
      setBook(selectedBook)
    }

   


  }, [selectedBook])

  // To refresh all
  const refreshBook=()=>{
    getbook().then(data=>{
      setBooks(data)
    })
 
  }
// to set selected books
    const handleSelectbook=(selectedBook)=>{
      setSelectedBook(selectedBook);
      console.log("Data",selectedBook)
    }

 // Function to be called when form will be submitted

      const submitHandler=(e)=>{
         e.preventDefault();
         addbook({
                     title: e.target.title.value,
                     author: e.target.author.value,
                     price: e.target.price.value,
                     isbn: e.target.isbn.value,
                     quentity: e.target.quentity.value
         })
         .then(data=>data)
      }


// ================================================

// =========================================================


      //     To control change in input box
   
    const handleChange=(e)=>{
      console.log(e.target)
       let {name,value,type}=e.target;
       console.log(name+" "+value);
       setBook((prevBook)=>{

           console.log(prevBook)
           return {...prevBook,[name]:value};
       })
   }

   // ==========================================================


      // To update handle
      const updateHandler=(e)=>{
        e.preventDefault();
        console.log("update Handler called")
        updateBook(selectedBook._links.self.href,{
          title: e.target.title.value,
          author: e.target.author.value,
          price: e.target.price.value,
          isbn: e.target.isbn.value,
          quentity: e.target.quentity.value
        }).then(data=>{
          setBook({title: '', author: '',price: '',isbn: '',quentity: ''})
          setSelectedBook(null);
        })
      }


  
      
  //to sort data
  const sort = async (choice) => {

    switch (choice) {
      case 1:
        setBook(await findByOrderByTitleAsc());
        break;
      case 2:
        setBook(await findByOrderByTitleDesc());
        break;
      case 3:
        setBook(await findByOrderByPriceAsc());
        break;
      case 4:
        setBook(await findByOrderByPriceDesc());
        break;
    }
  }

  return (


    <div>
      <button className="showForm mb-3" onClick={()=>{
        setShowForm(prev=>!prev)
      }}>Add Book</button>
          {shoowForm?
<div className='container border border-primary border-3 p-3 my-3 '>
            <form className='bookregistration' onSubmit={selectedBook? updateHandler:submitHandler} >
            <h1 className='bg-warning p-3 text-$indigo-900 text-center'>Add Book</h1>
                <div className="mb-3">
                    
                    {/* book Id */}
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='title' value={book.title} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    {/* book Name */}
                    <label for="exampleInputEmail1" className="form-label">Author </label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='author' value={book.author} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    {/* book price */}
                    <label for="exampleInputEmail1" className="form-label">Price </label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='price' value={book.price} onChange={handleChange}/>
                </div>

                 <div className="mb-3">
                    {/* book isbn */}
                    <label for="exampleInputEmail1" className="form-label">isbn</label>
                    <input type="title" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='isbn' value={book.isbn} onChange={handleChange}/> 

                         <div className="mb-3">
                    {/* book quentity */}
                     <label for="exampleInputEmail1" className="form-label">quentity</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='quentity' value={book.quentity} onChange={handleChange}/>
                </div>
                </div> 
                <button className='btn btn-warning'>Submit</button>
    </form>
    

    </div>:<></>}

      <div className="container">
        <div className="row">

          {/* Sidebar for sorting */}
          <div className="col-md-3">
            <ul className="list-group mb-3">
              <li
                className="list-group-item"
                onClick={() => {
                  sort(1);
                }}
              >
                A to Z
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sort(2);
                }}
              >
                Z to A
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sort(3);
                }}
              >
                Low to High
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sort(4);
                }}
              >
                High to Low
              </li>


            </ul>

            <div className="search-container mb-3">
        <input
          type="text"
          className="form-control"
          id="search-input"
          placeholder="Search here..."
          onChange={(e) => { setSearchQuery(e.target.value) }}
        />
      </div>
          </div>

          {/* Main content for displaying books */}
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {books.filter((book)=>{
                 return book.title.toLowerCase().includes(searchQuery.toLowerCase());
              }).map((b) => {
                return (
                  <BookItems
                    key={b.id}
                    title={b.title}
                    author={b.author}
                    price={b.price}
                    image={b._links.self.href}
                    book_link={b._links.self.href}
                    onSelectbooks={handleSelectbook}
                    deletebooks={refreshBook}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      );


    </div>


  )


}

export default Book;