import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self } from '@angular/core'
import { InputData } from "../../types"
import { ControlValueAccessor, NgControl } from "@angular/forms"

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TestInputComponent implements ControlValueAccessor {
  @Input() data: InputData
  private _onChange: (value: string) => void
  private _onTouched: () => void

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this
  }

  trackByFn(index: number, _: string) {
    return index
  }

  onBlur() {
    console.log('blur')
    this._onTouched()
  }

  removeExtraInput(index: number) {
    this.data.extraValues = this.data.extraValues?.filter((_, i) => i !== index)
  }


  addExtraInput() {
    if (!this.data.extraValues) {
      this.data.extraValues = ['']
    } else {
      this.data.extraValues.push('')
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn
  }

  writeValue(value: string): void {
    if (value) {
      this._onChange(value)
    }
    this.changeDetector.detectChanges()
  }
}
