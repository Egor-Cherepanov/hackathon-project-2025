import { useEffect, useState } from "react"
import { useContext } from "react"
import { AppContext } from "../context.js"
import { getMembers } from "../api"

export const useRequestGet = () => {
  const { store, setStore } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMembers = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getMembers()
      setStore(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (store.length === 0) {
      fetchMembers()
    }
  }, [store.length, setStore])

  return {
    isLoading,
    error,
    refresh: fetchMembers,
  }
}
