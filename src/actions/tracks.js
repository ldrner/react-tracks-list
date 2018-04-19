let fakeApiData = [
  {
    id: 1,
    name: "30 лет"
  },
  {
    id: 2,
    name: "Бомж"
  },
  {
    id: 3,
    name: "Демобилизация"
  }
];
// Асинхронный экшн получающий треки от стороннего API
export const getTracks = () => dispatch => {
        setTimeout(() => {
          console.log("Igot tracks");
          dispatch({
            type: "FETCH_TRACKS_SUCCESS",
            payload: fakeApiData
          });
        }, 2000);
      };
