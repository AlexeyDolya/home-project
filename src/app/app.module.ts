import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';

import {MatCardModule} from '@angular/material/card';
import { TestParentComponent } from './test-parent/test-parent.component';
import { TestChildComponent } from './test-parent/test-child/test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    CartComponent,
    TestParentComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
