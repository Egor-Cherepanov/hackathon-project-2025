import { API_BASE_URL } from "./API-BASE-URL"

export const getMemberById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/members/${id}`)
    if (!response.ok) throw new Error("Member not found")
    return await response.json()
  } catch (error) {
    console.error(`Failed to fetch member ${id}:`, error)
    throw error
  }
}
