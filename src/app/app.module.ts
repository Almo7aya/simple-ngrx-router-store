import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes : Routes = [
  { path : '', component : MainComponent },
  { path : 'one', component : OneComponent },
  { path : 'two', component : TwoComponent },
  { path : 'three', component : ThreeComponent },
  { path : '**', redirectTo : '', pathMatch : 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      router  : routerReducer
    }),
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
