import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'circdep';

  constructor(router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    });
  }
}
