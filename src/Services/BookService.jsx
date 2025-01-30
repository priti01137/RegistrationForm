
const API_LINK="http://localhost:8080/books"

export const getbook=()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["books"]);
}

export const findByOrderByPriceAsc=()=>
    {
        return fetch("http://localhost:8080/books/search/findByOrderByPriceAsc")
        .then(data=>data.json())  
        .then(data=>data["_embedded"]["books"])
    }

    
export const findByOrderByPriceDesc=()=>
    {
        return fetch("http://localhost:8080/books/search/findByOrderByPriceDesc")
        .then(data=>data.json())  
        .then(data=>data["_embedded"]["books"])
    }

    
export const findByOrderByTitleAsc=()=>
    {
        return fetch("http://localhost:8080/books/search/findByOrderByTitleAsc")
        .then(data=>data.json())  
        .then(data=>data["_embedded"]["books"])
    }

    
      
export const findByOrderByTitleDesc=()=>
    {
        return fetch("http://localhost:8080/books/search/findByOrderByTitleDesc")
        .then(data=>data.json())  
        .then(data=>data["_embedded"]["books"])
    }

    export const deleteBookItems=(bookItem_link)=>{
        console.log(bookItem_link)
        return fetch(bookItem_link,{method:"DELETE"})
        .then(data=>data.json())
        .then(data=>data)
    }

    export const getbookById=(book_link)=>{
        return fetch(book_link)
        .then(data=>data.json())
        .then(data=>data)
    }

    export const addbook=(book)=>{

        console.log(book);

        return fetch(API_LINK,
         {   method:"POST",
             headers: {"Content-Type":"application/json" },
          body:JSON.stringify(book)})
          .then(data=>data.json())
          .then(data=>data)
    
            
    }

export const updateBook=(book_link,book)=>{
    return fetch(book_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(book)
    })
    .then(data=>data.json())
    .then(data=>data)
}

