import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context.js";
import { useRequestGet } from "../components/UseRequestGet.jsx";
import { Card, Loader } from "../components";

const HomeContainer = ({ className }) => {
  const { store } = useContext(AppContext);
  const { isLoading } = useRequestGet();

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
  );
};

export const Home = styled(HomeContainer)`
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;
  max-width: 1200px;

  .title {
    font-size: 32px;

    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
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

    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }

    .participants-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 0 16px;
      list-style: none;
      margin: 0 auto;
      justify-content: space-between;
      max-width: 1000px;
    }

    .participants-list li {
      width: calc(33.33% - 16px);
    }
  }
`;
