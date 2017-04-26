import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { appStoreProviders } from './app.client.store'

import { AppComponent } from './app.client.component'
import { CounterComponent } from './counter/counter.client.component'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
