/**
 * Created by Administrator on 2016/12/10.
 */
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  styleUrls:["css/dashboard.component.css"],
  templateUrl: './view/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
  }
}
