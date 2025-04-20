import { MdFavorite } from "react-icons/md"
import styled from "styled-components"

const FavoriteUserCardContainer = ({
  className,
  photo,
  firstName,
  lastName,
  roles,
  about,
  updateUser,
}) => {
  const userRoles = roles.join(" ")
  return (
    <div className={className}>
      <div className="photo-container">
        <img
          className="user-photo"
          src={photo}
          alt={`${firstName} ${lastName}`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/128x130?text=No+Photo"
          }}
        />
      </div>
      <div className="user-information">
        <div className="name">
          {firstName} {lastName}
        </div>
        <div className="roles">{userRoles}</div>
        <div className="about-user">{about}</div>
      </div>
      <button className="favorite-button">
        <MdFavorite className="favorite-icon" onClick={updateUser} />
      </button>
    </div>
  )
}

export const FavoriteUserCard = styled(FavoriteUserCardContainer)`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Растягиваем на всю высоту */
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 8px;
  width: 600px;
  min-height: 160px; /* Минимальная высота карточки */
  position: relative;

  .photo-container {
    width: 128px;
    min-width: 128px; /* Фиксированная ширина */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-right: 15px;
    border-radius: 4px;
    background: #f5f5f5;
  }

  .user-photo {
    width: 127px;
    height: 169px;
    object-fit: cover;
  }

  .user-information {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }

  .name {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .roles {
    margin-bottom: 8px;
    font-size: 16px;
    color: #555;
  }

  .about-user {
    font-size: 14px;
    color: #666;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .favorite-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(242, 240, 240, 0.9);
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
      color: #ff4081;
      font-size: 20px;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: center;

    .photo-container {
      margin-right: 0;
      margin-bottom: 15px;
      height: 150px;
      width: 150px;
    }

    .user-information {
      width: 100%;
      text-align: center;
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
