import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HeroService }        from './hero.service';
import './rxjs-extensions';
import '../../public/css/styles.css';
import '../../public/css/sample.css';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
 styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService,
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
