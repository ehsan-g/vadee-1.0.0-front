import artworksBase from '../apis/artworksBase';
import {
  ARTIST_ARTWORKS_FAIL,
  ARTIST_ARTWORKS_REQUEST,
  ARTIST_ARTWORKS_SUCCESS,
  ARTIST_LIST_FAIL,
  ARTIST_LIST_REQUEST,
  ARTIST_LIST_SUCCESS,
} from '../constants/artistConstants';

export const fetchArtistsArtworks = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ARTIST_ARTWORKS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const response = await artworksBase.get(`artists/${id}/artworks/`, config);
    dispatch({
      type: ARTIST_ARTWORKS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    // check for generic and custom message to return using ternary statement
    dispatch({
      type: ARTIST_ARTWORKS_FAIL,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    });
  }
};

export const fetchArtistList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ARTIST_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await artworksBase.get(`artists/all/`, config);
    dispatch({
      type: ARTIST_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // check for generic and custom message to return using ternary statement
    dispatch({
      type: ARTIST_LIST_FAIL,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    });
  }
};
