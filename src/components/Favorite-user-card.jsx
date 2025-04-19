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
			<button onClick={removeUser}>X</button>
		</div>
	)
}

export const FavoriteUserCard = styled(FavoriteUserCardContainer)`
	display: flex;
	justify-content: space-between;
    align-items: center;
	margin-bottom: 20px;
	padding: 15px;
	border: 2px solid black;
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

	& button {
		height: 30px;
    	width: 30px;
		padding: 0;

		&:hover {
			cursor: pointer;
		}
	}
`
