import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // No declarations needed for standalone components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // Ensure HttpClientModule is imported here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
