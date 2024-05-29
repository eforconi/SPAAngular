import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/login/login.component';
import { LocationSelectorComponent } from './modules/components/location-selector/location-selector.component';
import { StoreModule, reduceState } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { instructorReducer } from './modules/state/instructor/instructor.reducer';
import { InstructorsListComponent } from './modules/components/intructors-list/instructors-list.component';
import { EffectsModule } from '@ngrx/effects';
import { InstructorEffects } from './modules/state/instructor/instructor.effects';
import { AuthService } from './_services/auth-service.service';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        LocationSelectorComponent,
        InstructorsListComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ instructors: instructorReducer }),
        EffectsModule.forRoot([InstructorEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            // logOnly: environment.production // Restrict extension to log-only mode in production
        })], providers: [AuthService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
