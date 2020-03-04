import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // When calling an action creator inside of another
    // action creator it needs to be "dispatched" to Redux Thunk
    await dispatch(fetchPosts());
    // const userIds = (_.uniq(_.map(getState().posts, 'userId')));
    // userIds.forEach(id=>dispatch(fetchUser(id)));

    // ABOVE CODE REFACTORS WITH LODASH CHAIN SYNTAX
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=>dispatch(fetchUser(id)))
        .value();
};


// ACTION CREATORS
export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts');
    dispatch ({
        type: 'FETCH_POSTS',
        payload: res.data,
    });
};


//------------------------------------------------------//
// _.memoize is used to store request data in memory so //
// that the browser doesn't need to load redundant data.//
// install dependency using npm install lodash          //
//------------------------------------------------------//
//
// export const fetchUser = (id) => dispatch => {
//    _fetchUser(id, dispatch);
// };
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const res = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch ({
//         type: 'FETCH_USER',
//         payload: res.data
//     });
// });
//
//------------------------------------------------------//

export const fetchUser = (id) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: res.data,
    });
};