import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ChannelComponent } from './channel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, ChannelComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
