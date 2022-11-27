import { Component, Input } from '@angular/core'
import { InputData } from "../../types"

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent {
  @Input() data: InputData

  trackByFn(index: number, value: string) {
    return index
  }

  removeExtraInput(index: number) {
    this.data.extraValues = this.data.extraValues?.filter((_, i) => i !== index)
    console.log(this.data.extraValues)
  }

  addExtraInput() {
    if (!this.data.extraValues) {
      this.data.extraValues = ['']
    } else {
      this.data.extraValues.push('')
    }


  }
}
