import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../context.js'
import { useRequestGet } from '../components/UseRequestGet.jsx'

// Стили для компонента
const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`

const TeamIntro = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #e7f3fe;
  border-left: 5px solid #2196f3;
  border-radius: 4px;
`

const IntroTitle = styled.h2`
  font-size: 24px;
  color: #2196f3;
`

const IntroText = styled.p`
  font-size: 16px;
  color: #333;
`

const ParticipantsBlock = styled.div`
  margin-top: 20px;
`

const ParticipantsTitle = styled.h2`
  font-size: 24px;
  color: #2196f3;
  margin-bottom: 10px;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Две колонки */
  gap: 20px; /* Промежуток между карточками */
`

const ListItem = styled.li`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s;
`

const ParticipantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
`

const ParticipantInfo = styled.div`
  padding: 10px;
`

const ParticipantName = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0;
`

const ParticipantRole = styled.p`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
`

const ParticipantAbout = styled.p`
  font-size: 14px;
  color: #777;
`

const LoadingText = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center; /* Центрируем текст загрузки */
`

export const Home = () => {
  const { store } = useContext(AppContext)

  // Custom hook - GET
  const { isLoading } = useRequestGet()

  return (
    <Container>
      <Title>Главная</Title>
      <TeamIntro>
        <IntroTitle>О команде</IntroTitle>
        <IntroText>
          Наша команда состоит из талантливых и увлеченных специалистов, каждый
          из которых вносит свой уникальный вклад в общий успех. Мы работаем
          вместе, чтобы создавать инновационные решения и обеспечивать высокий
          уровень качества в каждом проекте.
        </IntroText>
      </TeamIntro>
      <ParticipantsBlock>
        <ParticipantsTitle>Участники команды</ParticipantsTitle>
        {isLoading ? (
          <LoadingText>Загрузка участников...</LoadingText>
        ) : (
          <List>
            {store.map(({ id, firstName, lastName, roles, about, imageUrl }) => (
              <Link to={`/member/${id}`} key={id}>
                <ListItem>
                  <ParticipantImage src={imageUrl} alt={`${firstName} ${lastName}`} />
                  <ParticipantInfo>
                    <ParticipantName>{firstName} {lastName}</ParticipantName>
                    <ParticipantRole>Роль: {roles}</ParticipantRole>
                    <ParticipantAbout>Описание: {about}</ParticipantAbout>
                  </ParticipantInfo>
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </ParticipantsBlock>
    </Container>
  )
}
