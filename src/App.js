import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { GiCube } from "react-icons/gi";
import { GrSearch } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import { social, links, links2 } from "./components/data";
import axios from "axios";
import Image from "./components/Image";

// QRLfLllysypZAgpo8da1jIkJ8T4WtLnG9VF5l0y3Eq8

// _XdhoeviDdLhBOjz03nipyQaPeEFfed5BU_OMRb6688

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [images, setImages] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=QRLfLllysypZAgpo8da1jIkJ8T4WtLnG9VF5l0y3Eq8"
    );
    const data = await response.data;
    setImages(data);
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Wrapper>
        <SidebarWrapper>
          <div className="head">
            <GiCube />
            <h1 className="header">bluecube</h1>
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
        </SidebarWrapper>
        <MainWrapper>
          <Navbar setSidebarOpen={setSidebarOpen} />
          <TextsWrapper>
            <TextItem>
              World
              <FaCaretDown />
            </TextItem>
            <TextItem>
              Following
              <FaCaretDown />
            </TextItem>
            <TextItem>
              Popular
              <FaCaretDown />
            </TextItem>
            <TextItem>
              Post
              <FaCaretDown />
            </TextItem>
            <TextItem>
              Gender
              <FaCaretDown />
            </TextItem>
            <TextItem>
              Location
              <FaCaretDown />
            </TextItem>
            <LastTextItem>
              Profession
              <FaCaretDown />
            </LastTextItem>
          </TextsWrapper>
          <Gallary>
            <div className="image-container">
              {images.map((image) => {
                return <Image image={image} />;
              })}
            </div>
          </Gallary>
        </MainWrapper>
      </Wrapper>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const TextsWrapper = styled.div`
  display: flex;
  background-color: white;
  width: 76%;
  padding: 0 0.5rem;
  margin-left: 1rem;
  display: flex;
  height: 2.5rem;
  border-radius: 5px;
  @media (max-width: 1345px) {
    display: none;
  }
`;

const TextItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  border-right: 2px solid #d3d3d3;

  svg {
    font-size: 1rem;
    color: #002f87;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
  }
`;

const LastTextItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;

  svg {
    font-size: 1rem;
    color: #002f87;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
  }
`;

const MainWrapper = styled.div`
  padding: 1rem 2rem;
  // height: 100vh;
  width: 100%;
  background-color: #eee;
  .search-form {
    display: flex;
    background-color: red;
    width: 80%;
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  // height: 100vh;
  border-right: 2px solid #d3d3d3;
  background-color: #eee;
  .header {
    color: #002f87;
  }

  .head {
    display: flex;
    svg {
      font-size: 2rem;
      margin-top: 1.7rem;
      margin-right: 0.3rem;
      color: #002f87;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }

  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  .links {
    margin-left: -2.5rem;
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

const Gallary = styled.div`
  width: 100%;
  margin: 1rem auto;
  img {
    height: 175px;
  }
  .image-container {
    display: grid;
    gap: 0.5rem 2.4rem;
  }

  @media (min-width: 992px) {
    .image-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .image-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
`;

export default App;
