import { useContext, useLayoutEffect, useState } from "react"
import { AppContext } from "../context"
import { FavoriteUserCard } from "../components/Favorite-user-card"
import { useRequestGet } from "../components/UseRequestGet"
import { deleteUserFromFavorites } from "../api/delete-user-from-favorites"
import styled from "styled-components"

const FavoritesContainer = ({ className }) => {
	const { isLoading } = useRequestGet()
	const { store, setStore } = useContext(AppContext)

	const [users, setUsers] = useState([])
	const favoriteUsers = store.filter((user) => user.isFavorite === true);

	useLayoutEffect(() => {
		setUsers(favoriteUsers)
	}, [store])


	const removeUser = (userId) => {
		deleteUserFromFavorites(userId, setStore)
	}

    return (
        <div className={className}>
            <h1 className="header">Избранные</h1>
			{ isLoading
			?	<div className="loader"></div>
			:   users.length === 0
					? <div className="no-users-found">Пользователи не найдены</div>
					: favoriteUsers.map(({ id, firstName, lastName, photo, roles, about}) => (
						<FavoriteUserCard key={id} id={id} firstName={firstName} lastName={lastName} photo={photo} roles={roles} about={about} removeUser={() => removeUser(id, setStore)} />
					)
				)
			}
        </div>
    )
}

export const Favorites = styled(FavoritesContainer)`
	display: flex;
    flex-direction: column;
	align-items: center;

	& h1 {
		margin: 15px;
	}

	& .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    border: 5px solid rgb(59, 53, 23);
    border-radius: 50%;
    border-left-color: transparent;
    animation: loader 1s infinite;
	}

	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
