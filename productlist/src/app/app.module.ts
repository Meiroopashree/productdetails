import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
