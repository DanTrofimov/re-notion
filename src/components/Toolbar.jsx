import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: Consolas;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;
  color: #000000;
`

const Toolbar = () => {
    return (
      <nav className="toolbar">
            <Title>re-notion</Title>
            <p className="item-text">Notes list:</p>
            <ul className="item-text">
                <li>Current note title</li>
                <li>Current note title</li>
                <li>Current note title</li>
                <li>Current note title</li>
                <li>Current note title</li>
                <li>Current note title</li>
            </ul>
      </nav>
    );
}

export default Toolbar;