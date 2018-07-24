import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(asdads =>this.heroes = asdads);//Cuando se resuelva el subscribe se asigna a la variable heroes
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

  }
}