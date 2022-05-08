import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule],
  exports: [AboutComponent]
})
export class AboutModule {}
