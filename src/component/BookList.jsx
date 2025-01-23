import React from 'react'

function BookList({title,author,price}) {
  return (
    <div>
    <div class="card w-30">
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{author}</p>
      <p class="card-text">{price}</p>
      
    </div>
  </div>

</div>
  )
}

export default BookList