
const API_Link="http://localhost:8080/books"

export const getbook=()=>{
    return fetch(API_Link)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["books"]);
}