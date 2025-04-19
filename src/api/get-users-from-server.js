export const getUsersFromServer = (setStore) => {
  fetch("http://localhost:3000/members")
    .then((loadedData) => loadedData.json())
    .then((noteData) => setStore(noteData));
};
