/**
 * Created by Administrator on 2016/12/10.
 */


import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {Hero} from "./hero";
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector:'my-hero-detail',
  styleUrls:["css/hero-detail.component.css"],
  templateUrl: './view/hero-detail.component.html',
})
export  class HeroDetailComponent implements OnInit{
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  @Input()
  hero:Hero;
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}