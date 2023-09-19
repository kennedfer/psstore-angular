import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './card/card.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { CardTagComponent } from './card-tag/card-tag.component';

@NgModule({
  declarations: [AppComponent, CardsContainerComponent, CardComponent, CardFooterComponent, AppHeaderComponent, HeaderLinksComponent, CardTagComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
