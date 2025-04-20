import { useContext, useState } from "react"
import { AppContext } from "../context"
import { FavoriteUserCard } from "../components/Favorite-user-card"
import { updateUserFromFavorites } from "../api/update-user-from-favorites"
import { Loader } from "../components/loader/loader"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"
import { useRequestGet } from "../components"

const FavoritesContainer = ({ className }) => {
  const { store } = useContext(AppContext)
  const { refresh } = useRequestGet()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const favoriteUsers = store.filter((user) => user.isFavorite === true)

  const onFavButtonClick = async (userId) => {
    setIsLoading(true)
    setError(null)

    try {
      await updateUserFromFavorites(userId, false)
      await refresh()
    } catch (err) {
      setError("Не удалось обновить избранное")
      console.error("Ошибка при обновлении избранного:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={className}>
      <div className="header-wrapper">
        <Link to="/" className="back-link">
          <MdArrowBack className="back-icon" />
          На главную
        </Link>
        <h1 className="header">Избранные</h1>
      </div>

      {error && <div className="error-message">{error}</div>}

      {isLoading ? (
        <Loader />
      ) : favoriteUsers.length === 0 ? (
        <div className="no-users-found">Нет избранных пользователей</div>
      ) : (
        <div className="users-list">
          {favoriteUsers.map((user) => (
            <FavoriteUserCard
              key={user.id}
              {...user}
              updateUser={() => onFavButtonClick(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const Favorites = styled(FavoritesContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 12px;
  max-width: 800px;
  min-height: 200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  font-family: "Arial", sans-serif;

  .header-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }

  .header {
    font-size: 32px;
    margin: 0;
    text-align: center;
  }

  .back-link {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px 16px;
    background-color: #2196f3;
    color: white;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    z-index: 10;
    margin-top: -6px;

    &:hover {
      background-color: #0d8bf2;
      transform: translateY(-50%) scale(1.05);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .back-icon {
    font-size: 20px;
  }

  .no-users-found {
    font-size: 20px;
    color: #333;
    margin: 20px 0;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 15px;

    .header {
      font-size: 28px;
    }

    .back-link {
      padding: 6px 12px;
      font-size: 14px;
    }
  }
`
