import { GoTrash } from "react-icons/go";
import styled from "styled-components"

const FavoriteUserCardContainer = ({ className, photo, firstName, lastName, roles, about, removeUser }) => {
	const userRoles = roles.join(' ')
	return (
		<div className={className}>
			<img className="user-photo" src={photo} alt="Фото"/>
			<div className="user-information">
				<div className="name">{firstName} {lastName}</div>
				<div className="roles">{userRoles}</div>
				<div className="about-user">{about}</div>
			</div>
			<GoTrash className="button" onClick={removeUser} />
		</div>
	)
}

export const FavoriteUserCard = styled(FavoriteUserCardContainer)`
	display: flex;
	justify-content: space-between;
    align-items: center;
	margin-bottom: 20px;
	padding: 15px;
	border: 1px solid black;
	border-radius: 5px;
	width: 600px;

	& img {
		width: 128px;
    	height: 128px;
	}

	& .user-information {
		width: 70%;
		height: 128px;
	}

	& .name {
		margin-bottom: 10px;
	}

	& .roles {
		margin-bottom: 10px;
	}

	& .button {
		height: 20px;
    	width: 20px;
		padding: 0;

		&:hover {
			cursor: pointer;
			color: red;
		}
	}
`
