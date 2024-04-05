import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { instructorActions } from '../../state/instructor/instructor.actions';
import { getInstructors, selectIntructors } from '../../state/instructor/instructor.selectors';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss']
})
export class LocationSelectorComponent implements OnInit {
  instructors$ = this.store.select(state => selectIntructors(state));
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    console.log("location");
    this.store.dispatch(instructorActions.loadInstructors());
  }
}
