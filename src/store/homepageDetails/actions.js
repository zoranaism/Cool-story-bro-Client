import { apiUrl } from '../../config/constants'
import axios from "axios";

function homepageFetchedSuccess(homepage) {
  return {
    type: "FETCH_HOMEPAGE_DETAILS_SUCCESS",
    payload: homepage
  };
}

export function fetchHomePageById(id) {
  return async function(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log(response);

    dispatch(homepageFetchedSuccess(response.data));
  };
}