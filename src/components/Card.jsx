import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = ({ className, person }) => {
  return (
    <Link to={`/member/${person.id}`} className={className}>
      <div className="image-container">
        <img
          src={person.photo}
          alt={`${person.firstName} ${person.lastName}`}
          className="participant-photo"
        />
      </div>
      <div className="participant-details">
        <h3>
          {person.firstName} {person.lastName}
        </h3>
        <p className="role">{person.roles || "Участник команды"}</p>
        <p className="about">{person.about || "Информация отсутствует"}</p>
      </div>
    </Link>
  );
};

export const Card = styled(CardContainer)`
  background-color: #fff;
  border: 2px solid #000;
  height: 420px;
  width: 300px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 0;
  }

  .participant-photo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border: 2px solid #000;
    border-radius: 8px;
  }

  .participant-details {
    display: flex;
    flex-direction: column;
    padding: 15px;
    flex-grow: 1;

    h3 {
      font-size: 22px;
      color: #333;
      margin: 0 0 10px 0;
    }

    .role {
      font-size: 16px;
      color: #555;
      margin: 0 0 10px 0;
      font-weight: 500;
    }

    .about {
      font-size: 14px;
      color: #777;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
