import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckSelectorComponent } from './components/deck-selector/deck-selector.component';
import { MainComponent } from './components/main/main.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';
import { YugiohCardsComponent } from './components/yugioh-cards/yugioh-cards.component';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { MagicCardsComponent } from './components/magic-cards/magic-cards.component';
import { MagicCardComponent } from './components/magic-card/magic-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'magic', component: MagicCardsComponent },
  { path: 'magic/:pagenumber', component: MagicCardsComponent },
  { path: 'magic/card/:card-name', component: MagicCardComponent },
  { path: 'pokemon', component: PokemonCardsComponent },
  { path: 'pokemon/:pagenumber', component: PokemonCardsComponent },
  { path: 'pokemon/card/:card-name', component: PokemonCardComponent },
  { path: 'yugioh', component: YugiohCardsComponent },
  { path: 'yugioh/:pagenumber', component: YugiohCardsComponent },
  { path: 'yugioh/card/:card-name', component: YugiohCardComponent },
  { path: 'deckselector', component: DeckSelectorComponent },
  { path: 'search', component: SearchCardsComponent },
  { path: 'builder/:cardType', component: DeckBuilderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
