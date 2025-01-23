import React, { useEffect, useState } from 'react'
import BookItems from './BookItems'
import BookList from './BookList'
import { getbook } from '../Services/BookService'



function Book({}) {
    let [books, setBook] = useState([])

    useEffect(() => {

        getbook().then(data=>{
            setBook(data)
        })
      
    }, [])

    return (

        <div>
            {/* Displaying Book : Start */}
            <div >
                {
               books.map((b)=>{
                  return (
                  <BookItems
                  title={b.title}
                  author={b.author}
                  price={b.price}                                                                                                                                              />)
               })
            }
            </div>
            {/* Displaying Book : End */}
        </div>
        

    )


}

export default Book;