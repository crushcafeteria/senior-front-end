import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCargoComponent } from './add-cargo/add-cargo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCargoComponent } from './list-cargo/list-cargo.component';
import { SearchCargoComponent } from './search-cargo/search-cargo.component';

@NgModule({
  declarations: [AppComponent, AddCargoComponent, NavbarComponent, ListCargoComponent, SearchCargoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
