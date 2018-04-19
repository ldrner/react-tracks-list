const initialState = '';

export default function filterTracks(state = initialState, action) {
                 if (action.type === "FIND_TRACK") {
                   console.log('action :', action);
                   return action.payload;
                 }
                 return state;
               };