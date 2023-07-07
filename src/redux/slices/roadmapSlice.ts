/* eslint-disable no-param-reassign */
import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";
import type { RootState } from "src/redux/store";

interface RoadmapState {
    isShownPopup: boolean;
    popupData: any;
    roadmap: RoadmapModel | null;
}

const initialState: RoadmapState = {
    isShownPopup: true,
    popupData: null,
    roadmap: null,
};

const roadmapSlice = createSlice({
    name: "roadmap",
    initialState,
    reducers: {
        setIsShownPopup: state => {
            state.isShownPopup = !state.isShownPopup;
        },
    },
    extraReducers: builder => {
        builder.addCase(
            HYDRATE,
            (_, action: PayloadAction<any, "__NEXT_REDUX_WRAPPER_HYDRATE__">) => action.payload.roadmap
        );
    },
});

const selectSelf = (state: RootState) => state?.roadmap;

export const selectIsShown = createDraftSafeSelector(selectSelf, state => state.isShownPopup);

export const { setIsShownPopup } = roadmapSlice.actions;

export { roadmapSlice };
