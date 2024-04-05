import { KiteCourse } from "./course.model";

export interface Instructor {
    id: string;
    name: string;
    email: string;
    expertise: string[];
    courses?: KiteCourse[];
    price?: number;

}