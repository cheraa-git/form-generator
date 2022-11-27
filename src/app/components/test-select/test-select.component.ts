import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core'
import { SelectData } from "../../types"

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {
  @Input() data: SelectData

  selectIsOpen: boolean = false
  currChoice = ''


  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.data.currentChoice !== undefined) {
      this.currChoice = this.data.choices[this.data.currentChoice]
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const select = this.el.nativeElement.querySelector('.select-options')
    const input = this.el.nativeElement.querySelector('.input')
    if (input && select && !input.contains(event.target) && !select.contains(event.target)) {
      this.setOpenState(false)
    }
  }

  onKeyUp(event: any, data: SelectData) {
    const { choices, currentChoice, required } = data
    const input = event.target as HTMLInputElement
    console.log(event.key)

    if (!required && event.key.toLowerCase() === 'backspace') {
      if (!input.value) {
        this.data.currentChoice = undefined
      }
      return
    }
    if (choices && currentChoice !== undefined) {
      input.value = choices[currentChoice]
    } else {
      input.value = ''
    }
  }

  setOpenState(state: boolean) {
    this.selectIsOpen = state
  }

  setCurrent(index: number) {
    this.data.currentChoice = index
    this.currChoice = this.data.choices[this.data.currentChoice]
    this.selectIsOpen = false
  }
}
