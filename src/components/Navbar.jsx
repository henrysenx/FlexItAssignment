import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { GiCube } from "react-icons/gi";
import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = ({ setSidebarOpen }) => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <FormWrapper>
            <GrSearch />
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Find something..."
            />
            <button>Search</button>
          </FormWrapper>
        </div>
        <div className="nav-icons">
          <IconWrapper>
            <IoNotificationsSharp />
            <IconText>3</IconText>
          </IconWrapper>

          <ImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              className="logo"
              alt="coding addict"
            />
            <div className="online" />
          </ImageWrapper>
          <div className="text-sextion">
            <p>Abigail</p>
            <FaCaretDown />
          </div>
        </div>
        <MobileWrapper>
          <div className="head">
            <GiCube />
            <h1 className="header">bluecube</h1>
          </div>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </MobileWrapper>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .nav-center {
    display: flex;
    width: 97%;
    margin: 1rem auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-right: 1rem;
  }

  .nav-icons {
    display: flex;
    align-items: center;
    svg {
      font-size: 1.8rem;
      color: #002f87;
    }
  }

  .logo {
    justify-self: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-left: 1rem;
  }

  .text-sextion {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    color: #002f87;
    svg {
      font-size: 0.8rem;
      color: #002f87;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 800px) {
    .nav-toggle {
      display: flex;
    }
    .nav-icons {
      display: none;
    }
    .nav-header {
      display: none;
    }
  }
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem;
  background-color: white;
  border-radius: 4px;
  svg {
    font-size: 2rem;
    color: #002f87;
  }
  input {
    width: 90%;
    padding: 0.5rem 0.3rem;
    border: none;
    margin-left: 1rem;
  }
  input:focus {
    outline: none;
  }
  button {
    padding: 0 1rem;
    background-color: #002f87;
    color: white;
    font-size: 12px;
    border-radius: 5px;
    border: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  position: relative;
`;

const IconText = styled.div`
  display: flex;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  justify-self: center;
  height: 13px;
  width: 13px;
  font-size: 8px;
  color: white;
  justify-content: center;
  bottom: 0;
  right: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;

  .online {
    position: absolute;
    border-radius: 50%;
    height: 13px;
    width: 13px;
    background-color: green;
    bottom: -5px;
    right: 0;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #002f87;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;

export default Navbar;
