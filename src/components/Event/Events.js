import "../../css/Events.css";
import Event from "./Event";

const Events = () => {
  return (
    <div className="Events">
      <h1 className="Title">Events</h1>
      <div className="event-container">
        <div className="event-2021">
          <Event />
        </div>
      </div>
    </div>
  );
};

export default Events;
