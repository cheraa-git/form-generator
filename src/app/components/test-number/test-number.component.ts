import { Component, Input, OnInit } from '@angular/core'
import { NumberData } from "../../types"

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit{
  @Input() data: NumberData

  setValue(addedVal: number) {
    this.data.value = String(+(this.data.value || 0) + addedVal)
  }

  onChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    input.value = input.value.replaceAll(/\D/g, '')
    this.data.value = input.value
  }

  ngOnInit(): void {
    if (this.data.value === undefined) {
      this.data.value = ''
    }
  }
}
