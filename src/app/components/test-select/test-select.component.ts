import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  Self
} from '@angular/core'
import { SelectData } from "../../types"
import { ControlValueAccessor, NgControl } from "@angular/forms"

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestSelectComponent implements ControlValueAccessor {
  private _onChange: (value: number) => void
  private _onTouch: () => void
  @Input() data: SelectData


  selectIsOpen: boolean = false
  currChoice = ''


  constructor(
    private el: ElementRef,
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this
  }


  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const select = this.el.nativeElement.querySelector('.select-options')
    const input = this.el.nativeElement.querySelector('.input')
    if (input && select && !input.contains(event.target) && !select.contains(event.target)) {
      this.setOpenState(false)
    }
  }


  setOpenState(state: boolean) {
    this.selectIsOpen = state
  }

  setCurrent(index: number) {
    this.data.currentChoice = index
    this.selectIsOpen = false
  }

  registerOnChange(fn: (value: number) => void) {
    this._onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this._onTouch = fn
  }

  writeValue(value: number) {
    if (value) {
      this._onChange(value)
      this.currChoice = this.data.choices[value]
      this.changeDetector.detectChanges()
    }
  }
}
