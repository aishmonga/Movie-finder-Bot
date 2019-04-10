import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieRecastComponent } from "./movie-recast/movie-recast.component";

@NgModule({
  declarations: [AppComponent, MovieRecastComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
