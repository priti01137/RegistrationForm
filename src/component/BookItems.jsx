import React, { useEffect, useState } from 'react'
import { getbook , getbookById,deleteBookItems} from '../Services/BookService'



function BookItems({title,author,price,image,book_link,onSelectbooks,onDeletebook,deletebooks}) {

  const [book,setBooks]=useState([]);

  useEffect(()=>{

    getbook().then(data=>{
      setBooks(data)
    })

  },[])

  // update
  const onSelectUpdate=async (link)=>{
    console.log(link);
    let book=await getbookById(link);
    onSelectbooks(book)

}

// Delete
const onSelectDelete=async(link)=>{
  // console.log(book_link);
  const deletebook=await deleteBookItems(link)
  onDeletebook(book)
}

  return (
    <div>   
               
    <div className='col p-3'>
        <div class="card">
        <img src={image+"/image"} class="card-img-top img" alt=""/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{author}</p>
                <p class="card-text">{price}</p>

             

                {/* Update Button */}
                <button className='btn-1 btn-succes'onClick={()=>{onSelectUpdate(book_link)}}>Update</button>

                {/* Delete Button */}
                <button className='btn-2 btn-danger'onClick={()=>{onSelectDelete(book_link)}}>Delete</button>
               
            </div>

        </div>
    </div>

</div>

  )
}

export default BookItems