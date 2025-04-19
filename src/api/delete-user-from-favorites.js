import { getUsersFromServer } from "./get-users-from-server";

export const deleteUserFromFavorites = (id, setStore) => {
  fetch(`http://localhost:3000/members/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      isFavorite: false,
    }),
  });

  getUsersFromServer(setStore);
};
