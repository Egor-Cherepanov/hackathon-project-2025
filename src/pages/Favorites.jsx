import { useContext, useLayoutEffect, useState } from "react"
import { AppContext } from "../context"
import { FavoriteUserCard } from "../components/Favorite-user-card"
import { useRequestGet } from "../components/UseRequestGet"
import { updateUserFromFavorites } from "../api/update-user-from-favorites"
import { Loader } from "../components/loader/loader"
import styled from "styled-components"

const FavoritesContainer = ({ className }) => {
  const { isLoading } = useRequestGet()
  const { store, setStore } = useContext(AppContext)

  const [users, setUsers] = useState([])
  const favoriteUsers = store.filter((user) => user.isFavorite === true)

  const value = false

  useLayoutEffect(() => {
    setUsers(favoriteUsers)
  }, [store])

  const removeUser = (store, userId) => {
    updateUserFromFavorites(userId, value)
    const newStore = store.filter(({ id }) => id !== userId)

    setStore(newStore)
  }

  return (
    <div className={className}>
      <h1 className="header">Избранные</h1>
      {isLoading ? (
        <Loader />
      ) : users.length === 0 ? (
        <div className="no-users-found">Пользователи не найдены</div>
      ) : (
        favoriteUsers.map(
          ({ id, firstName, lastName, photo, roles, about }) => (
            <FavoriteUserCard
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              photo={photo}
              roles={roles}
              about={about}
              removeUser={() => removeUser(store, id)}
            />
          )
        )
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

  & h1 {
    margin: 15px 0 20px 0;
    width: 779px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    padding: 0 0 10px 0;
  }
`
