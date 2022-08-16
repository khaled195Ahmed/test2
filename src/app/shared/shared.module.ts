import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';
import { SpinerComponent } from './components/spiner/spiner.component'
import{CUSTOM_ELEMENTS_SCHEMA}  from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,






  ],
  exports :[
    HeaderComponent,
    SpinerComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class SharedModule { }
