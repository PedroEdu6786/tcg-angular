import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { YugiohCardsComponent } from './components/yugioh-cards/yugioh-cards.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { DeckSelectorComponent } from './components/deck-selector/deck-selector.component';
import { YugiohCardsService } from './service/yugioh/yugioh-cards.service';
import { PokemonCardsService } from './service/pokemon/pokemon-cards.service';
import { DeckSelectorService } from './service/deckselector/deck-selector.service';
import { YugiohCardComponent } from './components/yugioh-card/yugioh-card.component';
import { FormCardSearchComponent } from './components/form-card-search/form-card-search.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { DeckBuilderService } from './service/builder/deck-builder.service';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    YugiohCardsComponent,
    PokemonCardsComponent,
    DeckSelectorComponent,
    YugiohCardComponent,
    FormCardSearchComponent,
    SearchCardsComponent,
    DeckBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [YugiohCardsService, PokemonCardsService, DeckSelectorService, DeckBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
