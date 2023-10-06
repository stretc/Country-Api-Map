import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SvgMapComponent } from './svg-map/svg-map.component';
import { CountryApiService } from './country-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SvgMapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CountryApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
