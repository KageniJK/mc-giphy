import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GiphyComponent } from "./giphy/giphy.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, GiphyComponent],

  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
