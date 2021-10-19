import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicCardsComponent } from './components/magic-cards/magic-cards.component';
import { MainComponent } from './components/main/main.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';
import { YugiohCardsComponent } from './components/yugioh-cards/yugioh-cards.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pokemon', component: PokemonCardsComponent },
  { path: 'yugioh', component: YugiohCardsComponent },
  { path: 'yugioh/:pagenumber', component: YugiohCardsComponent },
  { path: 'yugioh/card/:card-name', component: YugiohCardComponent },
  { path: 'magic', component: MagicCardsComponent },
  { path: 'search', component: SearchCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
