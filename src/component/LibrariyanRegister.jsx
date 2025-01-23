import React from 'react'

function LibrariyanRegister() {
  return (
  
            <div className='container border border-primary border-1 p-2 my-3 '>
            <form>
            <h1 className='bg-warning p-3 text-$indigo-900 text-center'>Librariyan Registrayion</h1>
                <div className="mb-3">
                    
                    {/* User Id */}
                    <label for="exampleInputEmail1" className="form-label">Librariya Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userId' />
                </div>
                
                <div className="mb-3">
                    {/* User Password */}
                    <label for="exampleInputEmail1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userPassword' />
                </div>
                <button type='submit' className='bg-warning p-3   text-center'>Submit</button>
            </form>
  
        </div>
  )
}

export default LibrariyanRegister