import React from "react";
import { connect } from "react-redux";
import { getTracks } from "./actions/tracks";
import { Link } from "react-router-dom";
// import { css } from "aphrodite"; // <- библиотека для написания инлайн стилей в js,
// aphrodite/no-important - не добавляет !important к сгенерированным стилям - для нового проекта предпочительно
// содержит свой автопрефиксер
// import styles from "./AppStyles";

// import './App.css';
// import RegistrationForm from "./RegistrationForm";

// приимущество чистой ф-ции перед классом - нет необходимости биндить контекст (this),
// проще тестировать
// создается компонента без внутреннего состояния
// меньше кода :)
const Tracks = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
  console.log("Tracks ownProps", ownProps);
  let trackInput = "";
  let searchInput = "";
  const addTrack = () => {
    onAddTrack(trackInput.value);
    trackInput.value = "";
  };
  const findTrack = () => {
    console.log("searchInput.value :", searchInput.value);
    onFindTrack(searchInput.value);
  };
  return (
    <div>
      <div>
        <input
          className="form__control"
          type="text"
          ref={input => {
            trackInput = input;
          }}
        />
        <button className="btn" onClick={addTrack}>
          Add track
        </button>
      </div>
      <div>
        <input
          className="form__control"
          type="text"
          ref={input => {
            searchInput = input;
          }}
        />
        <button className="btn" onClick={findTrack}>
          Find track
        </button>
      </div>
      <div>
        <button className="btn" onClick={onGetTracks}>
          Get tracks
        </button>
      </div>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(track =>
      track.name.includes(state.filterTracks)
    ), // фильтруем треки относительно стейта filterTracks (поиск по имени)
    // фильтрация на уровне смарт-компонента, стор не меняется
    ownProps
  }), // <- mapStateToProps, подписываемся на store
  dispatch => ({
    onAddTrack: name => {
      const payload = {
        id: Number(Date.now()),
        name
      };
      dispatch({ type: "ADD_TRACK", payload: payload });
    },
    onFindTrack: name => {
      dispatch({ type: "FIND_TRACK", payload: name });
    },
    onGetTracks: () => {
      // переносим функцию asyncGetTracks в ./actions/tracks и имрортируем ее в Tracks.js

      // const asyncGetTracks = () => {
      //   return dispatch => {
      //     setTimeout(() => {
      //       console.log('I got tracks');
      //       dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: []});
      //     }, 2000);
      //   }
      // }
      // dispatch(asyncGetTracks());
      dispatch(getTracks());
    }
  }) // <- вход dispatch, выход объект методов
)(Tracks);
