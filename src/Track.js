import React from 'react';

import { connect } from "react-redux";

const Track = ( { track } ) => {
  return <div>Name: {track.name}</div>;
};

const mapStateToTrackProps = (state, ownProps) => {
  console.log("Track ownProps", ownProps);
  console.log("Track state", state);
  const { id } = ownProps.match.params;
  return { track: state.tracks.find(t => t.id === Number(id)) };
  // return { track: {name: 'test'}};
};

export default connect(mapStateToTrackProps)(Track);
