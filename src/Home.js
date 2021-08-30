import { useEffect } from "react";
import { useState } from "react";
import { editing, erasing, iterate } from "./service/API"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{

    const[events,setEvents]=useState([])

    useEffect(()=>{
        traverse()
    },[])

    const traverse=async()=>{
        const hai=await iterate()
        setEvents(hai.data)
    }

    const dele=async(id)=>{
        const tmp=await erasing(id)
        alert(tmp.data+" has deleted")
        window.location.assign("/")
    }

    return(<>
        <div className="container">
            <div className="row justify-content-center">
            <div className="table-responsive-md">
                <table className="mt-auto table table-hover table-striped rounded shadow p-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>Event Id</th><th>Event Name</th><th>Event Started</th>
                            <th>Event Ended</th><th>Event Expert Name</th>
                            <th>Event Venue</th><th>Event Participants Count</th>
                            <th>Event Duration</th><th>Event Status</th><th>Deletion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map((details,index)=>(
                                <tr>
                                    <td>{details.eventId}</td>
                                    <a href={`/edit/${index}`} className="btn btn-outline-warning">
                                        <td>{details.eventName}</td>
                                    </a>
                                    <td>{details.eventStarted}</td><td>{details.eventEnded}</td>
                                    <td>{details.eventExpert}</td><td>{details.eventVenue}</td>
                                    <td>{details.eventParticipants}</td><td>{details.eventDuration}</td>
                                    <td>{details.eventStatus}</td>
                                    <td>
                                        <input type="button" value="delete" className="btn btn-danger" onClick={()=>dele(details.eventId)}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </>)
}

export default Home