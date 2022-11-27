import { Component } from '@angular/core'
import { FormDataService } from "../../services/form-data.service"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  title = 'form-generator'
  loading = false
  formIsFilled: boolean = true


  constructor(
    public formDataService: FormDataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param => {
      this.loading = true
      this.formDataService.fetchData(param['id']).subscribe({
        next: () => this.loading = false,
        error: (err) => {
          this.loading = false
          alert('Ошибка, форма с таким id не найдена')
          console.log(err)
          this.router.navigate(['/'])
        }
      })
    })


  }

  ngDoCheck(): void {
    const data = this.formDataService.formData
    let isFilled = true
    if (data && data.length > 0) {
      data.forEach((el) => {
        if (!el.required) return
        if (el.type === 'checkbox') {
          isFilled = isFilled && !!el.choices.reduce((acc, choice) => acc + +choice.checked, 0)
        } else if (el.type === 'select') {
          isFilled = isFilled && el.currentChoice !== undefined
        } else if (el.type === 'input' || el.type === 'number') {
          isFilled = isFilled && !!el.value
        }
      })
      this.formIsFilled = isFilled
    }
  }

  sendDataHandler() {
    this.loading = true
    this.formDataService.saveForm().subscribe(() => {
      this.loading = false
      alert("Данные сохранены")
    })
  }
}
