import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { updateUserFromFavorites } from "../api/update-user-from-favorites"
import styled from "styled-components";

const CardContainer = ({ className, person }) => {
  const [isFavorite, setIsFavorite] = useState(person.isFavorite)

  const onFavButtonClick = async (e, userId) => {
    e.preventDefault()
    e.stopPropagation()

    const previousState = isFavorite
    setIsFavorite(!previousState)

    try {
      await updateUserFromFavorites(userId, !previousState)
    } catch (error) {
      setIsFavorite(previousState)
      console.error("Ошибка при обновлении избранного:", error)
    }
  }

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
        <div className="name-role">
          <h3>
            {person.firstName} {person.lastName}
          </h3>
          <p className="role">{person.roles || "Участник команды"}</p>
        </div>
        <p className="about">{person.about || "Информация отсутствует"}</p>
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={(e) => onFavButtonClick(e, person.id)}
          aria-label={
            isFavorite ? "Удалить из избранного" : "Добавить в избранное"
          }
        >
          {isFavorite ? (
            <MdFavorite className="favorite-icon" />
          ) : (
            <MdFavoriteBorder className="favorite-icon" />
          )}
        </button>
      </div>
    </Link>
  );
};

export const Card = styled(CardContainer)`
  --primary-color: #2196f3;
  --text-dark: #333;
  --text-medium: #555;
  --text-light: #777;
  --border-color: #ddd;
  --hover-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  position: relative;
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
      font-size: 13px;
      color: var(--text-light);
      margin: 0 0 10px 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex-grow: 2;
    }
  }

  .favorite-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 1;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.1);
    }

    .favorite-icon {
      width: 32px;
      height: 32px;
    }

    &.active {
      .favorite-icon {
        color: #ff4081;
        animation: heartBeat 0.5s;
      }
    }
  }

  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
