/**
 * Created by Administrator on 2016/12/10.
 */
/**
 * Created by Administrator on 2016/12/10.
 */
import { Component } from '@angular/core';
import {Hero} from "./hero";
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ["css/heroes.component.css"],
  templateUrl:"view/heroes.component.html"
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService,private router: Router) { }
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit():void{
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}



