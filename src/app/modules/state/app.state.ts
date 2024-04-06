import { InstructorState } from "./instructor/instructor.reducer";

export interface AppState {
    instructors: InstructorState;
}