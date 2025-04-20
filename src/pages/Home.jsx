import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context.js"
import { useRequestGet } from "../components/UseRequestGet.jsx"
import { Card } from "../components/Card.jsx"

const HomeContainer = ({ className }) => {
  const { store } = useContext(AppContext)
  const { isLoading } = useRequestGet()

  return (
    <div className={className}>
      <h1 className="title">Главная</h1>

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
          <p className="loading-text">Загрузка участников...</p>
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
  --primary-color: #2196f3;
  --secondary-color: #f9f9f9;
  --text-dark: #333;
  --text-medium: #555;
  --text-light: #777;
  --border-radius: 8px;
  --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;

  /* Центрирование и ширина контейнера */
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  .title {
    font-size: 32px;
    color: var(--text-dark);
    text-align: center;
    margin-bottom: 20px;
  }

  .team-intro {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #e7f3fe;
    border-left: 5px solid var(--primary-color);
    border-radius: 4px;

    h2 {
      font-size: 24px;
      color: var(--primary-color);
      margin-top: 0;
    }

    p {
      font-size: 16px;
      color: var(--text-dark);
      margin-bottom: 0;
    }
  }

  .participants-block {
    margin-top: 20px;

    h2 {
      font-size: 24px;
      color: var(--primary-color);
      margin-bottom: 10px;
    }

    .loading-text {
      font-size: 18px;
      color: var(--text-medium);
      text-align: center;
    }

    .participants-list {
      list-style-type: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      & > li {
        list-style: none;
      }
    }
  }
`
