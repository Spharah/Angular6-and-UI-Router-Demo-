import {Transition} from "@uirouter/angular";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { WebComponent } from "../web/web.component";
import { AppsComponent } from "../apps/apps.component";


export const homeState = {
    name: 'home',
    url: '/',
    component: HomeComponent
}

export const aboutState = {
    name: 'about',
    url: '/about',
    component: AboutComponent
}

export const servicesState = {
    name: 'services',
    url: '/services',
    component: ServicesComponent
}


export const webState = {
    name: 'services.web',
    url: '/web',
    component: WebComponent
}

export const appsState = {
    name: 'services.apps',
    url: '/apps',
    component: AppsComponent
}