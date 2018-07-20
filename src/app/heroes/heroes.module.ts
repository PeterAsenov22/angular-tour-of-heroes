import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module'

import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'

import { HeroesService } from './heroes.service'
import { MessageService } from '../message.service'

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroesService, MessageService],
  exports: [HeroesComponent]
})
export class HeroesModule { }
