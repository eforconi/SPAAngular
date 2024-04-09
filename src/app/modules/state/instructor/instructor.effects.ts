import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { instructorActions } from './instructor.actions';
import { IntructorsListService } from '../../components/intructors-list/services/intructors-list.service';
import { Instructor } from '../../models/instructor.model';

@Injectable()
export class InstructorEffects {
    constructor(private actions$: Actions, private instructorListService: IntructorsListService) {}

    loadInstructors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(instructorActions.loadInstructors),
            switchMap(() =>
                // Replace with your API call
                from(this.instructorListService.getInstructors()).pipe(
                    map((data) => instructorActions.loadInstructorsSuccess({ instructors: data as Array<Instructor> })),
                    catchError((error) => of(instructorActions.loadInstructorsFailure({ error })))
                )
            )
        )
    );
}