import React from "react";
import "../../css/Event.css";
import { EventList } from "./EventList";
import { Text } from "react-native";
import ModalImage from "react-modal-image";

class EventInfo extends React.Component {
  render() {
    return (
      <div className="Event">
        {EventList.slice(0, this.props.preview).map((event, index) => {
          return (
            <div className="event-info-container" key={index}>
              <ModalImage
                small={process.env.PUBLIC_URL + event.img}
                large={process.env.PUBLIC_URL + event.img}
                className="event-poster"
                alt={event.title}
              />

              <div className="event-details">
                <div className="event-details-text">
                  <h2>{event.title}</h2>
                  <h3>{event.date + "  |  " + event.time}</h3>
                  <Text className="event-details-desc">
                    {event.description}
                  </Text>
                  <br />
                  <br />
                  <i>{event.note}</i>
                </div>
                <div className="event-details-register">
                  <a
                    className={event.isActive ? "btn register" : "btn empty"}
                    href={event.register}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register Here
                  </a>

                  {event.link.map((item, key) => {
                    return (
                      <a
                        className={"btn register"}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        key={key}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EventInfo;
