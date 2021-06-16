import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { CustomWithCLIComponent } from './custom-with-cli/custom-with-cli.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';
import { FormsModule } from '@angular/forms';
import { Structuraldirective } from './structuralDirective/structuraldirective.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    CustomWithCLIComponent,
    DatabindingassignmentComponent,
    Structuraldirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
