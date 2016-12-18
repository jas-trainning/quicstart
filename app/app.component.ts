/**
 * Created by Administrator on 2016/12/10.
 */
import {Component} from '@angular/core';
@Component({
  styleUrls: ['app/css/app.component.css'],
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
