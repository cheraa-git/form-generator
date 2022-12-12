import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input, OnInit,
} from '@angular/core'
import { SelectData } from "../../types"

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestSelectComponent implements OnInit {
  @Input() data: SelectData
  listener: () => void
  selectIsOpen: boolean = false
  currChoice = ''

  constructor(private el: ElementRef) {
  }


  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const select = this.el.nativeElement.querySelector('.select-options')
    const input = this.el.nativeElement.querySelector('.input')
    if (input && select && !input.contains(event.target) && !select.contains(event.target)) {
      this.setOpenState(false)
    }
  }


  ngOnInit() {
    if (this.data.currentChoice !== undefined) {
      this.currChoice = this.data.choices[this.data.currentChoice]
    }
  }


  setOpenState(state: boolean) {
    this.selectIsOpen = state
  }

  setCurrent(index: number) {
    this.data.currentChoice = index
    this.currChoice = this.data.choices[index]
    this.selectIsOpen = false
  }

}
