import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { links, links2 } from "./data";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  console.log(sidebarOpen);
  return (
    <Wrapper>
      <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <div className="head">
            <GiCube />
            <h1 className="header">bluecube</h1>
          </div>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
          <h2>SHARE</h2>
          {links2.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background: var(--clr-white);

    @media (max-width: 800px) {
      width: 80%;
    }

    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: var(--clr-red-dark);
    transition: var(--transition);
    transform: translate(-200%);
  }
  .show-sidebar {
    transform: translate(0);
  }
  .header {
    color: #002f87;
  }

  .head {
    display: flex;
    svg {
      font-size: 2rem;
      margin-top: 1.4rem;
      margin-right: 0.3rem;
      color: #002f87;
    }
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }

  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  .links {
    margin-top: -2rem;
    h2 {
      font-size: 15px;
      margin-left: 1rem;
    }
  }

  .links a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .links a svg {
    font-size: 1.5rem;
    color: var(--clr-grey-5);
    margin-right: 1rem;
    transition: var(--transition);
  }
  .links a:hover svg {
    color: var(--clr-grey-4);
  }
`;

export default Sidebar;
