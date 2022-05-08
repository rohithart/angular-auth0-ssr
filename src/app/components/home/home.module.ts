import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule],
  exports: [HomeComponent]
})
export class HomeModule {}
