import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, doc, getDoc, DocumentReference } from "firebase/firestore";

import { Exec, Team } from "./Exec";
import "./Exec.css";

function ExecTemplate(props: any) {
  let team: Team = props.team;
  const [execs, setExecs]: any = useState([]);

  return (
    <div className="exec-info-container">
      {team.execs.map((e: Map<string, DocumentReference>, key: number) => {
        let role = Object.keys(e)[0];
        let path = Object.values(e)[0];

        useEffect(() => {
          const getExecs = async () => {
            const execsRef = doc(db, path.path);
            const docSnap = await getDoc(execsRef);
            console.log("Document data:", docSnap.data());

            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          };
          getExecs();
        }, []);

        return (
          <div className="exec-info" key={key}>
            {/* <img className="exec-img" src={exec.img} alt={exec.name} />
                  <div className="exec-details">
                    <div className="exec-name">{exec.name}</div>
                    <div className="exec-program">{exec.program}</div>
                    <div className="exec-role">{role}</div>
                  </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default ExecTemplate;
