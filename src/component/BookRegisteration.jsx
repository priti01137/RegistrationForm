import React from 'react'

function BookRegisteration() {
  return (
    <div>

<div className='container border border-primary border-1 p-2 my-3 '>
            <form className='bookregistration'>
            <h1 className='bg-warning p-3 text-$indigo-900 text-center'>Search Book</h1>
                <div className="mb-3">
                    
                    {/* User Id */}
                    <label for="exampleInputEmail1" className="form-label">Book Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='bookName' />
                </div>
                <div className="mb-3">
                    {/* User Name */}
                    <label for="exampleInputEmail1" className="form-label">Author </label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='author' />
                </div>
    </form>
    </div>
    </div>
  )
}

export default BookRegisteration