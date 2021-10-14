import React from "react";
import "./NoteContent.css";

const Content = ({ note }) => {
    return (
        <div className="content">
            <div className="buttons-wrapper">
                <button>edit</button>
                <button>delete</button>
            </div>
            <h1 className="title">{ note.title }</h1>
            <div className="note-wrapper">
                {
                    note.contentItems.map((item, index) => {
                        const { type, content, link, alt } = item;
                        return type === "text" ? (
                            <p className="item-text" key={type + index}>
                                { content }
                            </p>
                        ) : type === "image" ? (
                            <figure key={type + index}>
                                <img src={link} alt={alt}/>
                                <figcaption>{ alt }</figcaption>
                            </figure>
                        ) : type === "note-link" ? (
                            <a className="note-link" href={link} key={type + index}>
                                { content }
                            </a>
                        ) : ''
                    })
                }
            </div>
        </div>
    );
};

export default Content;