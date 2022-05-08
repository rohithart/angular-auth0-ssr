import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [SharedModule],
  exports: [NotFoundComponent]
})
export class NotFoundModule {

}
