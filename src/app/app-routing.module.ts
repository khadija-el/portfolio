import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './not-found/path-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
  // { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  { path: '**', component: NotFoundComponent, resolve: { path: PathResolveService } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
    // useHash: true,
}),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
