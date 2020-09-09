import { useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import { SET_DATA, SET_ERROR, PersonActionTypes } from "./personTypes";

export function useFetchPerson(
    personId: string,
    dispatch: React.Dispatch<PersonActionTypes>
): void {
    useEffect(() => {
        const key: string = `person_${personId}`;
        if (localStorage.getItem(key)) {
            const data = JSON.parse(localStorage.getItem(key) as string);
            dispatch({
                type: SET_DATA,
                name: data.name,
                profile_path: data.profile_path,
                titles: data.titles,
            });
        } else {
            fetch(
                `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US`
            )
                .then((res: Response) => res.json())
                .then((person) => {
                    if (person.status_code || person.errors) {
                        dispatch({ type: SET_ERROR, error: true });
                    } else {
                        fetch(
                            `${API_URL}person/${personId}/combined_credits?api_key=${API_KEY}`
                        )
                            .then((res) => res.json())
                            .then((titles) => {
                                dispatch({
                                    type: SET_DATA,
                                    name: person.name,
                                    profile_path: person.profile_path,
                                    titles: titles.cast,
                                });
                                localStorage.setItem(
                                    key,
                                    JSON.stringify({
                                        name: person.name,
                                        profile_path: person.profile_path,
                                        titles: titles.cast,
                                    })
                                );
                            });
                    }
                });
        }
    }, [dispatch, personId]);
}
