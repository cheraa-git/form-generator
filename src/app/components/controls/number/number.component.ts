import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Self } from '@angular/core'
import { NumberData } from "../../../types"
import { ControlValueAccessor, NgControl } from "@angular/forms"

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberComponent implements OnInit, ControlValueAccessor {
  private _onChange: (value: string) => void
  private _onTouch: () => void
  @Input() data: NumberData

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this
  }

  setValue(addedVal: number) {
    this._onChange(String(+(this.data.value || 0) + addedVal))
  }

  ngOnInit(): void {
    if (this.data.value === undefined) {
      this.data.value = ''
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this._onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this._onTouch = fn
  }

  writeValue(value: string): void {
    if (value) {
      value = value.replaceAll(/\D/g, '')
      this._onChange(value)
    }
    this.changeDetector.detectChanges()
  }
}
