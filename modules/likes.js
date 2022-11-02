const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const apiKey = 'eJ0dYt3woHnL6Sz1FyVG';
const getLikes = async () => {
  const res = await fetch(`${apiUrl}/${apiKey}/likes`);
  const data = await res.json();
  return data;
};
export default getLikes;
export const addLikes = async (id) => {
  await fetch(
    ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eJ0dYt3woHnL6Sz1FyVG/likes',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
      }),
    },
  );
};
// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eJ0dYt3woHnL6Sz1FyVG/likes