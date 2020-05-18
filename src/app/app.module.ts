import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TempleateComponent } from './components/templeate/templeate.component';
import { HttpClientModule } from '@angular/common/http';
  import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TempleateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
