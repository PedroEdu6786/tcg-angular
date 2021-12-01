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
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'magic',
    component: MagicCardsComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'magic/:pagenumber',
    component: MagicCardsComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'magic/card/:card-name',
    component: MagicCardComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'pokemon',
    component: PokemonCardsComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  { path: 'pokemon/:pagenumber', component: PokemonCardsComponent },
  {
    path: 'pokemon/card/:card-name',
    component: PokemonCardComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'yugioh',
    component: YugiohCardsComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'yugioh/:pagenumber',
    component: YugiohCardsComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'yugioh/card/:card-name',
    component: YugiohCardComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'deckselector',
    component: DeckSelectorComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'search',
    component: SearchCardsComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'builder/:cardType',
    component: DeckBuilderComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
