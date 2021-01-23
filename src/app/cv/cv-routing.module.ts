import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvComponent } from './cv.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome', component: CvComponent, data: { seo: { title: `its me & you` } }
    // children: [
    //   { path: '', redirectTo: 'dash', pathMatch: 'full'},
    //   { path: 'dash', component: DashComponent },
    //   { path: 'general', component: GeneralComponent },
    //   { path: 'wifi', component: WifiComponent },

    // ]
  },
  { path: 'welcome/:isPrivate', component: CvComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
