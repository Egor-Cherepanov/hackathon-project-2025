// import { useContext } from "react"
// import { AppContext } from "../context.js"
// import { useParams } from "react-router-dom"
// import {
//   AboutMember,
//   MembersRole,
//   Progress,
//   useRequestGet,
// } from "../components"
// import { Error } from "../pages"

// import { styled } from "styled-components"

// const MemberContainer = ({ className }) => {
//   const { isLoading } = useRequestGet()
//   const { store } = useContext(AppContext)
//   const { personId } = useParams()

//   const person = store.find((p) => String(p.id) === personId)

//   if (!person) {
//     return <Error error="Участник не найден" />
//   }

//   return (
//     <div className={className}>
//       <h1 className="header">Страница участника</h1>
//       <AboutMember person={person} />
//       <MembersRole person={person} />
//       <Progress person={person} />
//     </div>
//   )
// }

// export const Member = styled(MemberContainer)`
//   max-width: 800px;
//   margin: 40px auto;
//   padding: 20px;
//   background-color: #fdfdfd;
//   border: 2px solid #000;
//   border-radius: 12px;
//   font-family: "Arial", sans-serif;

//   & h1 {
//     text-align: center;
//     border-bottom: 2px solid black;
//     padding: 20px 0;
//     margin: 0;
//   }
// `

import { useState, useEffect, useContext } from "react"
import { AppContext } from "../context.js"
import { useParams } from "react-router-dom"
import { AboutMember, MembersRole, Progress, Loader } from "../components"
import { Error } from "../pages"
import { styled } from "styled-components"
import { getMemberById } from "../api"

const MemberContainer = ({ className }) => {
  const { store } = useContext(AppContext)
  const { personId } = useParams()
  const [person, setPerson] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        // Сначала проверяем данные в store
        const existingPerson = store.find((p) => String(p.id) === personId)

        if (existingPerson) {
          setPerson(existingPerson)
        } else {
          // Если нет в store, делаем запрос к API
          const data = await getMemberById(personId)
          setPerson(data)
        }
      } catch (err) {
        setError(err.message || "Ошибка загрузки данных участника")
      } finally {
        setIsLoading(false)
      }
    }

    fetchMemberData()
  }, [store, personId])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <Error error={error} />
  }

  if (!person) {
    return <Error error="Участник не найден" />
  }

  return (
    <div className={className}>
      <h1 className="header">Страница участника</h1>
      <AboutMember person={person} />
      <MembersRole person={person} />
      <Progress person={person} />
    </div>
  )
}

export const Member = styled(MemberContainer)`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;

  & h1 {
    text-align: center;
    border-bottom: 2px solid black;
    padding: 20px 0;
    margin: 0;
  }
`
