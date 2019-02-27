import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module'
import { UpdateComponent } from './update/update.component';
import { IBannerService } from '../services/ibanner.service';
import { BannerService } from '../services/banner.service';




@NgModule({
  declarations: [HomeComponent, UpdateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [IBannerService],
  exports: [HomeComponent]
})
export class HomeModule { }
