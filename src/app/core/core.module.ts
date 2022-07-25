import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}