import { useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import { SET_DATA, SET_ERROR, TitleActionTypes } from "./titleTypes";

export function useFetchTitle(
    mediaType: string,
    titleId: string,
    dispatch: React.Dispatch<TitleActionTypes>
): void {
    useEffect(() => {
        const key: string = `${mediaType}_${titleId}`;
        if (localStorage.getItem(key)) {
            const data = JSON.parse(localStorage.getItem(key) as string);
            dispatch({
                type: SET_DATA,
                title: data,
                cast: data.credits.cast,
                videos: data.videos.results,
                release_date: data.release_date,
            });
        } else {
            fetch(
                `${API_URL}${mediaType}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`
            )
                .then((res: Response) => res.json())
                .then((data) => {
                    if (data.status_code) {
                        dispatch({ type: SET_ERROR, error: true });
                    } else {
                        dispatch({
                            type: SET_DATA,
                            title: data,
                            cast: data.credits.cast,
                            videos: data.videos.results,
                            release_date: data.release_date,
                        });
                        dispatch({ type: SET_ERROR, error: false });
                        localStorage.setItem(key, JSON.stringify(data));
                    }
                });
        }
    }, [dispatch, mediaType, titleId]);
}
