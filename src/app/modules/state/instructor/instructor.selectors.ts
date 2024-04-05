import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { InstructorState } from './instructor.reducer';

export const selectIntructors =(state: AppState) => state.instructor;

// Define a selector to get the list of instructors
export const getInstructors = createSelector(
    selectIntructors,
    (state: InstructorState) => state.instructors
);

// Define a selector to get a specific instructor by ID
export const getInstructorById = (id: string) => createSelector(
    getInstructors,
    (instructors) => instructors.find(instructor => instructor.id === id)
);