import jsonPlacehodler from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  //_.map find extract userId from the array of objects, _.uniq find the unique id and return an array
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

//using redux-thunk action can return a function, and the redux will excetute the function and then dispatch a
//a object action
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlacehodler("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlacehodler(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlacehodler(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
