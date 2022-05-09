import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from './configs/app.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/modules/shared.module';

import { environment } from 'src/environments/environment';
import { HomeModule } from './components/home/home.module';
import { NotFoundModule } from './components/not-found/not-found.module';
import { AboutModule } from './components/about/about.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    HomeModule,
    NotFoundModule,
    AboutModule,
    AuthModule.forRoot({
      redirectUri: window.location.origin,
      domain: environment.auth0.domain,
      clientId: environment.auth0.client_id,
      audience: `https://${environment.auth0.domain}/api/v2/`,
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
      scope: 'offline_access',
      httpInterceptor: {
        allowedList: [
          '/api/*',
        ],
      },
		  }),
  ],
  providers: [
    Meta,
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppClientModule {}
