import { Component, OnInit } from '@angular/core'

import { Hero } from './hero.model'
import { HeroesService } from './heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[]

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes (): void {
    this.heroesService
    .getData()
    .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim()
    if (!name) { return }
    this.heroesService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroesService.deleteHero(hero).subscribe()
  }
}
