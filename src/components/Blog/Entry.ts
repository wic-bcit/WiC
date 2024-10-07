import { Timestamp } from "firebase/firestore";

export interface Links {
  name: string;
  url: string;
}

//change
export interface Entry {
  date: Timestamp;
  title: string;
  description: string;
  img: string;
  register: string;
  links: Links[];
  time: string;
  venue: string;
  isActive: boolean;
  id: string;
  note: string;
}
