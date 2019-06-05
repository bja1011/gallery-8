import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbIconModule,
  NbCardModule,
  NbSidebarModule, NbContextMenuModule, NbMenuModule, NbButtonModule, NbWindowModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BgImageModule } from './bg-image/bg-image.module';
import { HomeComponent } from './core/home/home.component';
import { GalleriesComponent } from './core/galleries/galleries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbSidebarModule,
    BgImageModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbButtonModule,
    NbWindowModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
