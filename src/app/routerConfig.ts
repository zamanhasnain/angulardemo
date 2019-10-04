import { Routes } from "@angular/router";

import { HelloComponent } from "./components/hello/hello.component";
import { SliderComponent } from "./components/slider/slider.component";
import { FooterComponent } from "./components/footer/footer.component";

const appRoutes: Routes = [
  {
    path: "hello",
    component: HelloComponent
  },
  {
    path: "slider",
    component: SliderComponent
  },
  {
    path: "footer",
    component: FooterComponent
  }
];
export default appRoutes;
