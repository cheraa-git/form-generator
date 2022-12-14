import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core'
import { FormDataService } from "../../services/form-data.service"
import { ActivatedRoute, Router } from "@angular/router"
import { FormData, IForm } from "../../types"

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class FormPageComponent {
  loading = false
  formIsFilled: boolean = true
  form: IForm

  constructor(
    private formDataService: FormDataService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private readonly changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param => {
      this.loading = true
      this.formDataService.getForm(param['id']).subscribe({
        next: (form) => {
          this.loading = false
          this.form = form
          this.changeDetector.detectChanges()
        },
        error: (err) => {
          if (err.status === 404) {
            alert('Форма с таким id не найдена :(')
          } else {
            alert('Внутренняя ошибка сайта, повторите попытку позже...')
          }
          this.loading = false
          console.error(err)
          this.router.navigate(['/'])
        }
      })
    })


  }

  ngDoCheck(): void {
    if (this.form) {
      this.#controlsIsFilled(this.form.data)
    }
  }

  sendDataHandler() {
    this.loading = true
    this.formDataService.saveForm(this.form).subscribe({
      next: (form) => {
        this.form = form
        this.loading = false
        this.changeDetector.detectChanges()
        alert("Данные сохранены")
      },
      error: (err) => {
        console.error(err)
        this.loading = false
        alert("Ошибка, не удалось сохранить форму")
      }
    })
  }

  #controlsIsFilled(data: FormData) {
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

  // #setControls(data: FormData) {
  //   this.controls = data.reduce((acc, el, i) => {
  //     if (el.type === 'input') {
  //       acc[`${el.type}-${i}`] = new FormControl(el.value)
  //     }
  //     return acc
  //   }, {} as { [type: string]: FormControl })
  //   console.log(this.controls)
  // }


}
