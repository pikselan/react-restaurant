import { FETCH_PAGE } from "../types";
import axios from "../../configs/axios";

export const fetchPage = (url, page) => (dispatch) => {
  dispatch({
    type: FETCH_PAGE,
    payload: {
      isLoading: true,
    },
  });

  return axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
          isLoading: false,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          isLoading: true,
          error: {
            message: err.message,
            status: err.name,
          },
        },
      });
    });
};
