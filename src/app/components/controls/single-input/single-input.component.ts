import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self } from '@angular/core'
import { InputData } from "../../../types"
import { ControlValueAccessor, NgControl } from "@angular/forms"

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SingleInputComponent implements ControlValueAccessor {
  @Input() data: InputData
  private _onChange: (value: string) => void
  private _onTouched: () => void

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this
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
