import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import SimpleNavbar from "../Reuse/Navbar/SimpleNavbar";
import Footer from "../Reuse/Footer/Footer";
import ExecTemplate from "./ExecTemplate";
import { home_route } from "../../Routes";
import { Exec, Team } from "./Exec";
import "./Exec.css";

export default function TeamPage() {
  const [team, setTeam]: any = useState([]);
  const teamCollectionRef = collection(db, "team");
  const q = query(teamCollectionRef, orderBy("start", "desc"));

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(q);
      setTeam(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, []);

  return (
    <div className="TeamPage">
      <SimpleNavbar />
      <h1 className="Title">Current Executive Team</h1>
      <div className="exec-container">
        {team.map((t: Team, key: number) => {
          return <ExecTemplate team={t} key={key} />;
        })}

        <div className="btn-container">
          <Link className={"page-link"} to={home_route}>
            ◂ Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
