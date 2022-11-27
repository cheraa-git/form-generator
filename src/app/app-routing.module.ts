import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormPageComponent } from "./pages/form-page/form-page.component"
import { StartPageComponent } from "./pages/start-page/start-page.component"

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'form/:id', component: FormPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
