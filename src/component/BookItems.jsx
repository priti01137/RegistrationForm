import React, { useEffect, useState } from 'react'
import { getbook } from '../Services/BookService'

function BookItems({title,author,price}) {

  const [books,setBooks]=useState([]);

  useEffect(()=>{

    getbook().then(data=>{
      setBooks(data)
    })

  },[])

  return (
    <div>   
               
    <div className='col p-3'>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{author}</p>
                <p class="card-text">{price}</p>

                {/* Buy Button */}
                <button className='btn btn-warning'>Search</button>
                
               
            </div>

        </div>
    </div>

</div>

  )
}

export default BookItems