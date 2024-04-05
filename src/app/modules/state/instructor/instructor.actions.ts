import { createAction, props } from '@ngrx/store';
import { Instructor } from '../../models/instructor.model';


export const instructorActions = {  
    addInstructor: createAction(
        '[Instructor] Add Instructor',
        props<{ instructor: Instructor }>()
    ),
    removeInstructor: createAction(
        '[Instructor] Remove Instructor',
        props<{ id: string }>()
    ),
    updateInstructor: createAction(
        '[Instructor] Update Instructor',
        props<{ instructor: Instructor }>()
    ),
    loadInstructors: createAction('[Instructor] Load Instructors'),
    loadInstructorsSuccess: createAction(
        '[Instructor] Load Instructors Success',
        props<{ instructors: Instructor[] }>()
    ),
    loadInstructorsFailure: createAction(
        '[Instructor] Load Instructors Failure',
        props<{ error: any }>()
    )
};

