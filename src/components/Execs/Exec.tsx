import { Timestamp } from "firebase/firestore";

export interface Exec {
  name: string;
  img: string;
  program: string;
}

export interface Team {
  start: Timestamp;
  end: Timestamp;
  execs: [];
}
