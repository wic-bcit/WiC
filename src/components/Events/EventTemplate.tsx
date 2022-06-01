import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";
import { Event, Links } from "./Event";
import { Text } from "react-native";

import "./Events.css";

export default function EventTemplate(props: any = 0) {
  const [events, setEvents]: any = useState([]);
  const eventsCollectionRef = collection(db, "events");
  const q = query(eventsCollectionRef, orderBy("date", "desc"));

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(q);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, []);

  let end: number =
    Number(props.preview) > 0 ? Number(props.preview) : events.length;

  return (
    <div className="Event">
      {events.slice(0, end).map((e: Event, key: number) => {
        return (
          <div className="event-description" key={key}>
            <img
              src={e.img}
              alt={e.title}
              className="event-poster"
              width="500"
            ></img>

            <div className="event-details">
              <div className="event-details-text">
                <h2>{e.title}</h2>
                <h3>{e.date.toDate().toDateString() + "  |  " + e.time}</h3>
                <Text>{e.description.replaceAll("/n", "\n")}</Text>

                {e.links.map((link: Links, key1: number) => {
                  return (
                    <a
                      className={
                        link.name != null ? "event-link" : "event-link empty"
                      }
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      key={key1}
                    >
                      <br /> <br />
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div
                className={
                  e.isActive
                    ? "event-details-register active"
                    : "event-details-register"
                }
              >
                <a
                  className={e.isActive ? "btn" : "btn empty"}
                  href={e.register}
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
