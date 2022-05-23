import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";

import Event from "./Event";
import "./Events.css";
import "../../App.css";

export default function EventCards(props: any) {
  const [events, setEvents]: any = useState([]);
  const eventsCollectionRef = collection(db, "events");
  const q = query(eventsCollectionRef, orderBy("date", "desc"));

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(q);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getEvents();
  }, []);

  let start: number =
    Number(props.preview) == 0 ? 0 : events.length - Number(props.preview);
  console.log("Start " + start);
  console.log("Event " + events.length);

  return (
    <div className="Event">
      {events.slice(start, events.length).map((e: Event) => {
        return (
          <div className="event-description" key={e.id}>
            <img src={e.img} alt={e.title} className="poster"></img>

            <div className="event-details">
              <div className="event-details-text">
                <h2>{e.title}</h2>
                <h3>{e.date.toDate().toDateString() + "  |  " + e.time}</h3>
                <p>{e.description}</p>
              </div>
              <div className="event-details-register">
                <a
                  className={e.isActive ? "btn register" : "btn empty"}
                  href={e.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Here
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
