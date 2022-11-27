import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestInputComponent } from './components/test-input/test-input.component';
import { TestSelectComponent } from './components/test-select/test-select.component';
import { TestNumberComponent } from './components/test-number/test-number.component';
import { TestCheckboxComponent } from './components/test-checkbox/test-checkbox.component';
import { HttpClientModule } from "@angular/common/http";
import { SelectTypePipe } from './pipes/select-type.pipe';
import { InputTypePipe } from './pipes/input-type.pipe';
import { NumberTypePipe } from './pipes/number-type.pipe';
import { CheckboxTypePipe } from './pipes/checkbox-type.pipe';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component'
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestCheckboxComponent,
    SelectTypePipe,
    InputTypePipe,
    NumberTypePipe,
    CheckboxTypePipe,
    FormPageComponent,
    StartPageComponent
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
