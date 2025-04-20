import { useContext } from 'react'
import { AppContext } from '../context.js'
import { useParams } from 'react-router-dom'

export const Member = () => {
  const { store } = useContext(AppContext)
  const { personId } = useParams()

  const person = store.find((p) => String(p.id) === personId)

  if (!person) {
    return <p>Участник не найден</p>
  }

  return (
    <div>
      {person.id}
      {person.firstName}
    </div>
  )
}
