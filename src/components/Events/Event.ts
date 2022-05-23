import { Timestamp } from "firebase/firestore";

interface Event {
  date: Timestamp;
  title: string;
  description: string;
  img: string;
  link: string;
  time: string;
  venue: string;
  isActive: boolean;
  id: string;
}

export default Event;
