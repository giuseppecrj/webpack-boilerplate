import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { rootReducer as reducer } from './app.client.reducer'

import { AppComponent } from './app.client.component'
import { CounterComponent } from './counter/counter.client.component'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({ maxAge: 5 }),
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
