import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleInputComponent } from './components/controls/single-input/single-input.component';
import { SelectComponent } from './components/controls/select/select.component';
import { NumberComponent } from './components/controls/number/number.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { HttpClientModule } from "@angular/common/http";
import { SelectTypePipe } from './pipes/select-type.pipe';
import { InputTypePipe } from './pipes/input-type.pipe';
import { NumberTypePipe } from './pipes/number-type.pipe';
import { CheckboxTypePipe } from './pipes/checkbox-type.pipe';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component'
import { FormsModule } from "@angular/forms";
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { MultipleInputComponent } from './components/controls/multiple-input/multiple-input.component'

@NgModule({
  declarations: [
    AppComponent,
    SingleInputComponent,
    SelectComponent,
    NumberComponent,
    CheckboxComponent,
    SelectTypePipe,
    InputTypePipe,
    NumberTypePipe,
    CheckboxTypePipe,
    FormPageComponent,
    StartPageComponent,
    CreatePageComponent,
    MultipleInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
