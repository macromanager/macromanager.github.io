import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from "@angular/forms"
import {AppComponent} from '../components/AppComponent'
import {HomeComponent} from '../components/HomeComponent'
import {HeaderComponent} from '../components/HeaderComponent'
import {FooterComponent} from '../components/FooterComponent'
import { RouterModule }   from '@angular/router';
import { ApplicationRoutes }   from '../routes/ApplicationRoutes';  
import { LearnComponent } from '../components/LearnComponent';
import { DownloadsComponent } from '../components/DownloadsComponent';

import { CardComponent } from '../components/CardComponent';
import { MenuComponent } from '../components/MenuComponent';
import { CarouselComponent } from '../components/CarouselComponent';


@NgModule({
    imports: [RouterModule.forRoot(ApplicationRoutes),
                BrowserModule,
                FormsModule],
    declarations: [
        HeaderComponent, 
        AppComponent, 
        FooterComponent, 
        HomeComponent,
        DownloadsComponent,
        LearnComponent, 
        CardComponent, 
        MenuComponent, 
        CarouselComponent
    ],
    bootstrap: [AppComponent]
})
export class MainModuleLibrary { }