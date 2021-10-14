import React from "react";
import "./App.css";
import Toolbar from "./components/shared/organisms/Toolbar/index";
import NoteContent from "./components/shared/organisms/NoteContent/index";

function App() {
  const applicationSchema = {
    notesList: [
      {
        id: 1,
        title: "Note example",
      },
      {
        id: 2,
        title: "Another one note",
      },
      {
        id: 3,
        title: "Some other note",
      },
      {
        id: 4,
        title: "Note example",
      },
      {
        id: 5,
        title: "Another one note",
      },
      {
        id: 6,
        title: "Some other note",
      },
    ],
    currentNote: {
      id: 1,
      title: "Note example",
      contentItems: [
        {
          type: "text",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
            " sed do eiusmod tempor incididunt ut labore et dolore magna " +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
            "dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
            " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          type: "image",
          link: "https://pbs.twimg.com/media/EyOq33IXMAAZiQ2.png",
          alt: "dog sitting on the chair in fire",
        },
        {
          type: "note-link",
          content: "Link to another note",
          link: "/notes/1",
        }
      ],
    },
  };

  return (
    <div className="app-wrapper">
      <Toolbar notesList={applicationSchema.notesList}/>
      <NoteContent note={applicationSchema.currentNote} />
    </div>
  );
}

export default App;
