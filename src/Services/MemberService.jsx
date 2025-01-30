const API_LINK="http://localhost:8080/members"

export const addMembers=(member)=>{
    return fetch(API_LINK,{method:"POST",headers:{
        "Content-Type":"application/json"
    },body:JSON.stringify(member)}).then(data=>data.json()).then(data=>data)
}