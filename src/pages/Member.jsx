import { useContext } from "react"
import { AppContext } from "../context.js"
import { useParams } from "react-router-dom"
import { AboutMember, MembersRole, Progress } from "../components"
import { Error } from "../pages"

import { styled } from "styled-components"

const MemberContainer = ({ className }) => {
  const { store } = useContext(AppContext)
  const { personId } = useParams()

  const person = store.find((p) => String(p.id) === personId)

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
