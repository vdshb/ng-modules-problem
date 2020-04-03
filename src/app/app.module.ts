import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CounterModule} from './counter.module';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        CounterModule.builder().instanceId('main.CountService').build(),
        CounterModule.builder().instanceId('integration.CountService').build(),
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
