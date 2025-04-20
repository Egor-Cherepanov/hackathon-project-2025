import { API_BASE_URL } from "./API-BASE-URL"

export const getMembers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/members`)
    if (!response.ok) throw new Error("Network response was not ok")
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch members:", error)
    throw error
  }
}
