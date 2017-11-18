import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  router$: Observable<any>;
  url : string;

  constructor(private store: Store<any>) {
      this.router$ = store.select('router');
      this.router$.subscribe(e => {

          if(e){
            console.log(e['state']['url']);
            this.url = e['state']['url'];

            if(this.url === '/three') console.log('three');

          }
      });
  }

}
