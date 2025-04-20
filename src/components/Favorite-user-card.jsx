import { MdFavorite } from "react-icons/md"
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
			<button className="favorite-button">
				<MdFavorite className="favorite-icon" onClick={removeUser}/>
			</button>

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
	border-radius: 8px;
	width: 600px;

	& img {
		width: 128px;
    	height: 130px;
	}

	& .user-information {
		width: 70%;
		height: 128px;
	}

	& .name {
		margin-bottom: 10px;
		font-size: 20px;
    	font-weight: bold;
	}

	& .roles {
		margin-bottom: 10px;
	}

  .favorite-button {
     top: 125px;
     left: 347px;
     background: rgb(242 240 240 / 90%);
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
	   color: #ff4081;
       animation: heartBeat 0.5s;
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
