import { Component } from '@angular/core'

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {
  inputTypes = [
    { type: 'input', label: 'Текстовое поле' },
    { type: 'multiple-input', label: 'Множественное текстовое поле' },
    { type: 'number', label: 'Числовое поле' },
    { type: 'checkbox', label: 'Флажки' }
  ]

  createInput(type: string) {
    console.log(type)
  }
}
