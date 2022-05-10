import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AuthServerService } from './auth.server.service';
import { Auth0AuthService } from './services/auth.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [{
    provide: Auth0AuthService,
    useClass: AuthServerService,
  }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
