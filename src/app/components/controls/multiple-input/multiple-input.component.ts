import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { MultipleInputData } from "../../../types"

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleInputComponent implements OnInit {
  @Input() data: MultipleInputData

  trackByFn(index: number, _: string) {
    return index
  }

  ngOnInit() {
    if (!this.data.values) {
      this.data.values = ['']
    }
  }

  removeExtraInput(index: number) {
    this.data.values = this.data.values.filter((_, i) => i !== index)
  }

  addExtraInput() {
    if (!this.data.values) {
      this.data.values = ['']
    } else {
      this.data.values.push('')
    }
  }
}
