import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module'
import { BannerService } from './services/banner.service';
import { MissionModule } from './mission/mission.module';
import { GenericModule } from './generic/generic.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    MissionModule,
    GenericModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
