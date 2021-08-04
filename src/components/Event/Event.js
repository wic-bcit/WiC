import "../../css/Event.css";
import { EventList } from "./EventList";
import ModalImage from "react-modal-image";

const Event = () => {
  return (
    <div className="Event">
      {EventList.map((event, index) => {
        return (
          <div className="event-description">
            <ModalImage
              small={process.env.PUBLIC_URL + event.img}
              large={process.env.PUBLIC_URL + event.img}
              className="poster"
              alt={event.title}
            />

            <div className="event-details">
              <h2>{event.title}</h2>
              <h3>{event.date + "  |  " + event.time}</h3>
              <p>{event.description}</p>
              <a href={event.link}>Register Here</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const closeLightbox = () => {
  this.state.open = true;
};

export default Event;
