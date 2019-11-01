import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnsibleInputPanelComponent } from './ansible-input-panel/ansible-input-panel.component';
import { AnsibleServiceClientService } from './ansible-service-client/ansible-service-client.service';

@NgModule({
  declarations: [
    AppComponent,
    AnsibleInputPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //AnsibleServiceClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
