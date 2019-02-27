import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { VicharComponent } from './vichar/vichar.component';
import { BannerComponent } from './banner/banner/banner.component';
import { CarouselDirective } from './directives/carousel.directive';


@NgModule({
  declarations: [NavigationComponent, BannerComponent,CarouselDirective, SidebarComponent, NotificationsComponent, VicharComponent],
  imports: [
    CommonModule
  ],
  providers:[],
  exports: [NavigationComponent,BannerComponent, SidebarComponent, NotificationsComponent,CarouselDirective]
})
export class SharedModule { }
