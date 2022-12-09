import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Self } from '@angular/core'
import { CheckboxData } from "../../types"
import { ControlValueAccessor, NgControl } from "@angular/forms"

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TestCheckboxComponent implements OnInit, ControlValueAccessor {
  private _onChange: (value: number) => void
  private _onTouch: () => void
  @Input() data: CheckboxData
  allIsChecked: boolean
  numberOfChecked: number

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this
  }

  onChange(index: number, choice: { label: string, checked: boolean }) {
    this.data.choices[index].checked = !choice.checked
    this.ngOnInit()
  }

  changeAll() {
    this.data.choices.forEach((choice, i) => {
      this.data.choices[i].checked = !this.allIsChecked
    })
    this.allIsChecked = !this.allIsChecked
  }

  ngOnInit(): void {
    this.numberOfChecked = this.data.choices.reduce((acc, choice) => acc + +choice.checked, 0)
    this.allIsChecked = this.numberOfChecked === this.data.choices.length
  }

  registerOnChange(fn: (value: any) => void) {
    console.log('registerOnChange')
    this._onChange = fn
  }

  registerOnTouched(fn: () => void) {
    console.log('registerOnTouched')
    this._onTouch = fn
  }

  writeValue(value: any) {

    console.log(value)
  }
}
