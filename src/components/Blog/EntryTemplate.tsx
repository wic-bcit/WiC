import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { query, orderBy, collection, getDocs, Timestamp } from "firebase/firestore";
import { Entry, Links } from "./Entry";
import { Text } from "react-native";
import "./Blog.css";

export default function EventTemplate(props: any = 0) {
    const [entries, setEntries]: any = useState([]);
    const blogCollectionRef = collection(db, "blog"); ///////
    const q = query(blogCollectionRef, orderBy("date", "desc")); ////////

    useEffect(() => {
        const getEntries = async () => {
            const data = await getDocs(q);
            setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getEntries();
    }, []);

    let end: number =
        Number(props.preview) > 0 ? Number(props.preview) : entries.length;

    return (
        <div className="Entry">
            {entries.slice(0, end).map((e: Entry, key: number) => {
                return (
                    <div className="entry-description" key={key}>
                        <img
                            src={e.img}
                            alt={e.title}
                            className="entry-poster"
                            width="500"
                        ></img>

                        <div className="entry-details">
                            <div className="entry-details-text">
                                <h2>{e.title}</h2>
                                <h3>{e.subtitle}</h3>
                                <h4>{e.date.toDate().toDateString()}</h4>
                                {e.description.replaceAll('/n', '\n').split(/(\*\*.*?\*\*|__.*?__)/).map((part, index) => (
                                    <Text
                                        key={index}
                                        style={
                                            part.startsWith('**') && part.endsWith('**')
                                                ? { fontWeight: 'bold' }
                                                : part.startsWith('__') && part.endsWith('__')
                                                    ? { fontStyle: 'italic' }
                                                    : {}
                                        }
                                    >
                                        {part.replace(/\*\*|__/g, '')}
                                    </Text>
                                ))}

                                {e.qa.map((qa, index) => (
                                    <div key={index}>
                                        <p className="qa-question">💭{qa.question}</p>
                                        {qa.answer.replaceAll('/n', '\n').split(/(\*\*.*?\*\*|__.*?__)/).map((part, i) => (
                                            <Text
                                                key={i}
                                                style={
                                                    part.startsWith('**') && part.endsWith('**')
                                                        ? { fontWeight: 'bold' }
                                                        : part.startsWith('__') && part.endsWith('__')
                                                            ? { fontStyle: 'italic' }
                                                            : {}
                                                }
                                            >
                                                {part.replace(/\*\*|__/g, '')}
                                            </Text>
                                        ))}
                                    </div>
                                ))}

                                {e.links.map((link: Links, key1: number) => {
                                    return (
                                        <a
                                            className={
                                                link.name !== null ? "entry-link" : "entry-link empty"
                                            }
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={key1}
                                        >
                                            <br /> <br />
                                            {link.name}
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
