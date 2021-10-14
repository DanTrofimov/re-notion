import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: Consolas;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
`;

const NoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5%;
`;

const Content = () => {
    return (
        <div className="content">
            <div className="button-wrapper">
                <button>edit</button>
                <button>delete</button>
            </div>
            <Title>Current note title</Title>
            <NoteWrapper>
                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <img src="https://pbs.twimg.com/media/DTdJjM6XkAAZfAQ.jpg" alt="picture"/>
                    <figcaption>image sample</figcaption>
                </figure>
            </NoteWrapper>
            <button className="button-link">Link to the another note</button>
        </div>
    );
};

export default Content;