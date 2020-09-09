import React, { useReducer } from "react";
import List from "./list/List";
import Spinner from "./layout/Spinner";
import { useFetchList } from "../store/list/listActions";
import listReducer from "../store/list/listReducer";

const Movies: React.FC = () => {
    const initialState = { page: 1, mediaType: "movie", titles: [] };

    const [pop, popDispatch] = useReducer(listReducer, {
        ...initialState,
        category: "popular",
    });
    const [top, topDispatch] = useReducer(listReducer, {
        ...initialState,
        category: "top_rated",
    });
    const [now, nowDispatch] = useReducer(listReducer, {
        ...initialState,
        category: "now_playing",
    });
    const [upcoming, upcomingDispatch] = useReducer(listReducer, {
        ...initialState,
        category: "upcoming",
    });

    useFetchList(pop, popDispatch);
    useFetchList(top, topDispatch);
    useFetchList(now, nowDispatch);
    useFetchList(upcoming, upcomingDispatch);

    return (
        <>
            {now.titles.length > 0 ? (
                <>
                    <List titles={pop} dispatch={popDispatch} />
                    <List titles={top} dispatch={topDispatch} />
                    <List titles={now} dispatch={nowDispatch} />
                    <List titles={upcoming} dispatch={upcomingDispatch} />
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default Movies;
