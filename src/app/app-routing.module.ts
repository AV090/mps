import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MissionComponent } from './mission/mission/mission.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path:'mission',component:MissionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
