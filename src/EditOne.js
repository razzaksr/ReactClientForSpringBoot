import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { adding, editing, iterate } from "./service/API"

const EditOne=()=>{

    const{id}=useParams()

    useEffect(()=>{
        loadings()
    },[])


    const loadings=async()=>{
        let hai=await iterate()
        hai=hai.data
        setEvent(hai[id])
    }

    const[event,setEvent]=useState({
            eventId:0,
            eventName:"",
            eventStarted:new Date().toISOString(),
            eventEnded:new Date().toISOString(),
            eventExpert:"",
            eventVenue:"",
            eventDuration:0,
            eventStatus:false,
            eventParticipants:0
    })

    const hey=(e)=>{
        const{name,value}=e.target
        setEvent((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const sub=async()=>{
        alert("Sub called "+event)
        await editing(event)
        cls()
        window.location.assign("/")
    }

    const cls=()=>{
        setEvent(()=>{
            return{
                eventId:0,
                eventName:"",
                eventStarted:new Date().toISOString(),
                eventEnded:new Date().toISOString(),
                eventExpert:"",
                eventVenue:"",
                eventDuration:0,
                eventStatus:false,
                eventParticipants:0
            }
        })
    }

    return(<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <input type="hidden" name="eventId" value={event.eventId}/>
                    <input type="text" placeholder="Event Name" name="eventName" value={event.eventName} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Started  MM/DD/YYYY" name="eventStarted" value={event.eventStarted} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Ended  MM/DD/YYYY" name="eventEnded" value={event.eventEnded} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Expert" name="eventExpert" value={event.eventExpert} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Venue" name="eventVenue" value={event.eventVenue} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Duration" name="eventDuration" value={event.eventDuration} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event PArticipants" name="eventParticipants" value={event.eventParticipants} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Status" name="eventStatus" value={event.eventStatus} onChange={hey} className="form-control"/>
                    <div className="row justify-content-around">
                        <input type="button" className="col-3 btn btn-warning" onClick={sub} value="Update" />
                        <input type="button" className="col-3 btn btn-danger" onClick={cls} value="Clean" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default EditOne