import { Timestamp } from "firebase/firestore";

export interface Links {
  name: string;
  url: string;
}

export interface Entry {
  date: Timestamp;
  title: string;
  subtitle: string;
  description: string;
  qa: QA[];
  img: string;
  links: Links[];
  id: string;
} 

export interface QA {
  question: string;
  answer: string;
}

