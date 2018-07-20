import { Component, OnInit } from '@angular/core'
import { Hero } from '../heroes/hero.model'
import { HeroesService } from '../heroes/heroes.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroesService.getData()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }
}
