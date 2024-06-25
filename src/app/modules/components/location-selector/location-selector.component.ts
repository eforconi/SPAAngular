import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { instructorActions } from '../../state/instructor/instructor.actions';
import { getInstructors, selectIntructors } from '../../state/instructor/instructor.selectors';
import { AppState } from '../../state/app.state';
import { Instructor } from '../../models/instructor.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss'],
})
export class LocationSelectorComponent implements OnInit {
  instructors$ = this.store.select(state => selectIntructors(state));
  instructor:Instructor = {id: '1', name: 'John Doe', email: 'email', expertise: ['expertise'], courses: [], price: 0}
  locationCounter: WritableSignal<number> = signal(0);
  locationText: Signal<string> = computed(() => 'Number of locations alvailable '+this.locationCounter());
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const locationCounter: WritableSignal<number> = signal(0);
    const locationText: Signal<string> = computed(() => 'Number of locations alvailable '+locationCounter());
    this.store.dispatch(instructorActions.loadInstructors());
    this.store.dispatch(instructorActions.addInstructor({instructor: this.instructor}));
    this.instructors$.subscribe((data) => {
      console.log("location intructors",data);
    });
  }
  addLocation(){
    this.locationCounter.set(this.locationCounter() + 1);
  }
}
