import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppConfig } from './configs/app.config';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: AppConfig.routes.home, component: HomeComponent, pathMatch: 'full' },
  { path: AppConfig.routes.about, component: AboutComponent, pathMatch: 'full' },
  { path: AppConfig.routes.error404, component: NotFoundComponent },
  { path: '**', redirectTo: '/' + AppConfig.routes.error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
