import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AuthServerService } from './auth.server.service';
import { AuthService } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [{
    provide: AuthService,
    useClass: AuthServerService,
  }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
