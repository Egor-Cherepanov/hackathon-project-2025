import { useState } from "react"
import { MdFavorite } from "react-icons/md"
import { MdFavoriteBorder } from "react-icons/md"
import { SocialMedia } from "./social-media/social-media"
import { updateUserFromFavorites } from "../../api/update-user-from-favorites"
import { useRequestGet } from "../UseRequestGet"
import { styled } from "styled-components"

const AboutMemberContainer = ({ className, person }) => {
  const [isFavorite, setIsFavorite] = useState(person.isFavorite)
  const { refresh } = useRequestGet()

  const onFavButtonClick = async (e, userId) => {
    e.preventDefault()
    e.stopPropagation()

    const previousState = isFavorite

    try {
      const updatedUser = await updateUserFromFavorites(userId, !previousState)
      setIsFavorite(updatedUser.isFavorite)
      refresh()
    } catch (error) {
      setIsFavorite(previousState)
      console.error("Ошибка при обновлении избранного:", error)
    }
  }

  return (
    <div className={className}>
      <div className="profile">
        <div className="image-and-icon">
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
          <img
            src={person.photo}
            alt={`${person.firstName} ${person.lastName}`}
          />
        </div>
        <div className="info">
          <h2>
            {person.firstName} {person.lastName}
          </h2>
          <div className="info-text">
            <div className="info-age">Возраст: {person.age} лет</div>
            <div className="info-about">О себе: {person.about}</div>
          </div>
          <SocialMedia person={person} />
        </div>
      </div>
    </div>
  )
}

export const AboutMember = styled(AboutMemberContainer)`
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;

  .profile {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
  }

  .image-and-icon {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
  }

  .profile img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border: 2px solid #000;
    border-radius: 8px;
    box-shadow: 4px 4px 0 #000;
  }

  .info {
    flex: 1;
    min-width: 250px;
  }

  .info h2 {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: bold;
  }

  .info-text {
    font-size: 18px;
    color: #333;
  }

  .info-age {
    margin-bottom: 8px;
  }

  .info-about {
    margin-top: 12px;
  }

  .favorite-button {
    position: absolute;
    top: 209px;
    margin-right: 9px;
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
`
