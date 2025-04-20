import { useEffect, useState, useCallback } from "react"
import { useContext } from "react"
import { AppContext } from "../context.js"
import { getMembers } from "../api"

export const useRequestGet = () => {
  const { store, setStore } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMembers = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getMembers()
      setStore(data)
    } catch (err) {
      setError(err.message)
      console.error("Failed to fetch members:", err)
    } finally {
      setIsLoading(false)
    }
  }, [setStore])

  useEffect(() => {
    fetchMembers()
  }, [fetchMembers])

  return {
    isLoading,
    error,
    refresh: fetchMembers,
    store,
  }
}
