import React, { useState } from 'react'
import { addbook } from '../Services/BookService'


function BookRegisteration() {


  // Function to be called when form will be submitted
        let [book,setBooks]=useState({title: ' ',author: ' ',price:' ',isbn:' ',quentity:' '})
        const submitHandler=(e)=>{
          // console.log("Hello")
          e.preventDefault();
           addbook({
                       title: e.target.title.value,
                       author: e.target.author.value,
                       price: e.target.price.value,
                       isbn: e.target.isbn.value,
                       quentity: e.target.quentity.value
           }).then(data=>data.json())
           .then(data=>data)
        }

  return (

    <div>

<div className='container border border-primary border-3 p-3 my-3 '>
            <form className='bookregistration' onSubmit={submitHandler}>
            <h1 className='bg-warning p-3 text-$indigo-900 text-center'>Add Book</h1>
                <div className="mb-3">
                    
                    {/* User Id */}
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='title' />
                </div>
                <div className="mb-3">
                    {/* User Name */}
                    <label for="exampleInputEmail1" className="form-label">Author </label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='author' />
                </div>

                <div className="mb-3">
                    {/* User price */}
                    <label for="exampleInputEmail1" className="form-label">Price </label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='price' />
                </div>

                
                <button className='btn btn-warning'>Submit</button>
    </form>
    </div>
    
    </div>
  )
}

export default BookRegisteration