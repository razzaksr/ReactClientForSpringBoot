import { useState } from "react"
import { adding } from "./service/API"

const NewOne=()=>{

    const[event,setEvent]=useState({
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
        await adding(event)
    }

    const cls=()=>{
        setEvent(()=>{
            return{
                eventName:"",
                eventStarted:"",
                eventEnded:"",
                eventExpert:"",
                eventVenue:"",
                eventDuration:0
            }
        })
    }

    return(<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <input type="text" placeholder="Event Name" name="eventName" value={event.eventName} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Started  MM/DD/YYYY" name="eventStarted" value={event.eventStarted} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Ended  MM/DD/YYYY" name="eventEnded" value={event.eventEnded} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Expert" name="eventExpert" value={event.eventExpert} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Venue" name="eventVenue" value={event.eventVenue} onChange={hey} className="form-control"/>
                    <input type="text" placeholder="Event Duration" name="eventDuration" value={event.eventDuration} onChange={hey} className="form-control"/>
                    <div className="row justify-content-around">
                        <input type="button" className="col-3 btn btn-primary" onClick={sub} value="Insert" />
                        <input type="button" className="col-3 btn btn-primary" onClick={cls} value="Clean" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default NewOne