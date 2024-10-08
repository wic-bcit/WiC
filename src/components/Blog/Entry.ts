import { Timestamp } from "firebase/firestore";

export interface Links {
  name: string;
  url: string;
}

//change
export interface Entry {
  date: Timestamp;
  title: string;
  subtitle: string;
  description: string;
  body: string;
  img: string;
  links: Links[];
  id: string;
} 
