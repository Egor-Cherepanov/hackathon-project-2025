import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

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
  )
}

export const Card = styled(CardContainer)`
  background-color: #fff;
  border: 1px solid #000;
  height: 370px;
  width: 300px;
  border-radius: 4px;
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 75%;
    overflow: hidden;
  }

  .participant-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom: 1px solid #eee;
  }

  .participant-details {
    padding: 15px;

    h3 {
      font-size: 20px;
      color: #333;
      margin: 0 0 5px 0;
    }

    .role {
      font-size: 16px;
      color: #555;
      margin: 0 0 8px 0;
      font-weight: 500;
    }

    .about {
      font-size: 14px;
      color: #777;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`
