export const updateUserFromFavorites = (id, value) => {
  fetch(`http://localhost:3000/members/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      isFavorite: value,
    }),
  })
}
