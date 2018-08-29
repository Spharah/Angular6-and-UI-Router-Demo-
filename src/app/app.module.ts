import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UIRouterModule} from "@uirouter/angular";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { homeState, aboutState, servicesState, webState, appsState } from './shared/states';
import { WebComponent } from './web/web.component';
import { AppsComponent } from './apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WebComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states:[homeState, aboutState, servicesState, webState, appsState] , useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
