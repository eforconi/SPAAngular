import { createReducer, on } from "@ngrx/store";
import { Instructor } from "../../models/instructor.model";
import { instructorActions } from "./instructor.actions";

export interface InstructorState {
    instructors: Instructor[]; // Corrected property name
    loading: boolean;
    error: any;
}

export const initialState: InstructorState = {
    instructors: [], // Corrected property name
    loading: false,
    error: null
};

export const instructorReducer = createReducer(
    initialState,
    on(instructorActions.addInstructor, (state, { instructor }) => ({
        ...state,
        instructors: [...state.instructors, instructor],
    })),
    on(instructorActions.removeInstructor, (state, { id }) => ({
        ...state,
        instructors: state.instructors.filter(instructor => instructor.id !== id)
    })),
    on(instructorActions.loadInstructors, state => ({
        ...state,
        loading: true
    })),
    on(instructorActions.loadInstructorsSuccess, (state, { instructors }) => ({
        ...state,
        instructors,
        loading: false,
        error: null
    })),
    on(instructorActions.loadInstructorsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);
