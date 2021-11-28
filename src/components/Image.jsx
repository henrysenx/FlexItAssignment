import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";

const Image = ({ image }) => {
  console.log(image);
  return (
    <Wrapper>
      <div className="container">
        <img src={image.urls.small} alt="img-name" />

        <div className="lower">
          <div className="text-item">
            <span>{image.user.first_name}</span>
            <div className="icon-section">
              <GoLocation />
              <span>{image.user.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);

    img {
      width: 11rem;
      height: 15rem;
      background: var(--clr-black);
    }
    @media (min-width: 992px) {
      img {
        width: 15rem;
      }
    }
    @media (max-width: 990px) {
      img {
        width: 100%;
      }
    }
    @media (min-width: 1170px) {
      img {
        width: 100%;
      }
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .lower {
    position: absolute;
    bottom: 0;
    height: 30%;
    width: 100%;
  }
  .text-item {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    color: white;
  }
  .icon-section {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    color: white;
    span {
      font-size: 12px;
      margin-left: 0.5rem;
    }
    svg {
      font-size: 10px;
      color: white;
    }
  }
`;

export default Image;
