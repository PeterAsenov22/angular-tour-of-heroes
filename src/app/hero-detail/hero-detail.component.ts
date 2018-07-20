import { Component, OnInit } from '@angular/core'
import { Hero } from '../heroes/hero.model'

import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { HeroesService } from '../heroes/heroes.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroesService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.heroesService
      .updateHero(this.hero)
      .subscribe(() => this.goBack())
  }
}
