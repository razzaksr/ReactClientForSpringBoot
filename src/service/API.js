import axios from 'axios'

//const uri="http://localhost:8080/DLitheEbuddy/ws"

const uri="http://localhost:8080/DLitheEbuddy-0.0.1-SNAPSHOT/ws"

//const uri="http://localhost:8080/DLitheEbuddy-0.0.1-SNAPSHOT/ws/"

export const iterate=async()=>{
    const tmp=await axios.get(`${uri}/`)
    return tmp
}

export const adding=async(object)=>{
    const res=await axios.post(`${uri}/new/json/`,object)
    alert(res.data.eventName+" in API")
    return res
}

export const editing=async(object)=>{
    const res=await axios.put(`${uri}/edit/`,object)
    alert(res.data.eventName+" in API")
    return res
}

export const erasing=async(id)=>{
    return await axios.delete(`${uri}/delete/${id}`)
}