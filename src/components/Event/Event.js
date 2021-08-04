import "../../css/Event.css";
import { EventList } from "./EventList";
import ModalImage from "react-modal-image";

const Event = () => {
  return (
    <div className="Event">
      {EventList.map((event, index) => {
        return (
          <div className="event-description" key={index}>
            <ModalImage
              small={process.env.PUBLIC_URL + event.img}
              large={process.env.PUBLIC_URL + event.img}
              className="poster"
              alt={event.title}
            />

            <div className="event-details">
              <div className="event-details-text">
                <h2>{event.title}</h2>
                <h3>{event.date + "  |  " + event.time}</h3>
                <p>{event.description}</p>
              </div>
              <div className="event-details-register">
                <a
                  className="btn register"
                  href={event.link}
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
};

export default Event;
