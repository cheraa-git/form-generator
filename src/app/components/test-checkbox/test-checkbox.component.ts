import { Component, Input, OnInit } from '@angular/core'
import { CheckboxData } from "../../types"

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {
  @Input() data: CheckboxData
  allIsChecked: boolean
  numberOfChecked: number

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

}
