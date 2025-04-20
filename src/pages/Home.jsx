import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../context.js"
import { useRequestGet } from "../components/UseRequestGet.jsx"
import { Card, Loader } from "../components"
import { MdFavorite } from "react-icons/md"

const HomeContainer = ({ className }) => {
  const { store } = useContext(AppContext)
  const { isLoading } = useRequestGet()

  return (
    <div className={className}>
      <div className="header-wrapper">
        <h1 className="title">Главная</h1>
        <Link to="/favorites" className="favorites-link">
          <MdFavorite className="favorites-icon" />
          Избранное
        </Link>
      </div>

      <div className="team-intro">
        <h2>О команде</h2>
        <p>
          Наша команда состоит из талантливых и увлеченных специалистов, каждый
          из которых вносит свой уникальный вклад в общий успех. Мы работаем
          вместе, чтобы создавать инновационные решения и обеспечивать высокий
          уровень качества в каждом проекте.
        </p>
      </div>

      <div className="participants-block">
        <h2>Участники команды</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="participants-list">
            {store.map((person) => (
              <li key={person.id}>
                <Card person={person} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export const Home = styled(HomeContainer)`
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  position: relative;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    flex-grow: 1;
  }

  .favorites-link {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    right: 20px;
    top: 0;
    padding: 8px 16px;
    background-color: #ff4081;
    color: white;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    z-index: 10;
    margin-top: 20px;

    &:hover {
      background-color: #e91e63;
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .favorites-icon {
    font-size: 20px;
  }

  .team-intro {
    margin-bottom: 20px;
    padding: 15px 15px 10px 15px;
    border-bottom: 2px solid black;

    h2 {
      font-size: 24px;
      margin-top: 0;
    }

    p {
      font-size: 20px;
      color: #333;
      margin-bottom: 0;
    }
  }

  .participants-block {
    margin-top: 40px;
    width: 100%;

    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }

    .participants-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      justify-content: center;
      gap: 20px;
      padding: 0 60px;
      list-style: none;
      margin: 0 auto;
      max-width: calc(100% - 40px);

      li {
        display: flex;
      }
    }

    @media (max-width: 1000px) {
      .participants-list {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    }

    @media (max-width: 600px) {
      .participants-list {
        grid-template-columns: minmax(250px, 300px);
        padding: 0 10px;
        max-width: calc(100% - 20px);
        justify-content: center;
      }

      .favorites-link {
        padding: 6px 12px;
        font-size: 14px;
        right: 10px;
      }
    }
  }
`
