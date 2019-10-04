import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { SliderComponent } from "./components/slider/slider.component";
import { HelloComponent } from "./components/hello/hello.component";
import appRoutes from "./routerConfig";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, NavComponent, SliderComponent, HelloComponent, FooterComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
