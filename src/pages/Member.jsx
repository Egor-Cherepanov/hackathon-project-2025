import { useState, useEffect, useContext } from "react"
import { AppContext } from "../context.js"
import { useParams } from "react-router-dom"
import { AboutMember, MembersRole, Progress, Loader } from "../components"
import { Error } from "../pages"
import { styled } from "styled-components"
import { getMemberById } from "../api"
import { Link } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"

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
      <div className="header-wrapper">
        <Link to="/" className="back-link">
          <MdArrowBack className="back-icon" />
          На главную
        </Link>
        <h1 className="header">Страница участника</h1>
      </div>
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

  .header-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }

  .header {
    font-size: 32px;
    margin: 0;
    text-align: center;
  }

  .back-link {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px 16px;
    background-color: #2196f3;
    color: white;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    z-index: 10;
    margin-top: -4px;

    &:hover {
      background-color: #0d8bf2;
      transform: translateY(-50%) scale(1.05);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`
