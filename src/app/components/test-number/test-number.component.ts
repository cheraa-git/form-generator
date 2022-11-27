import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent {
  value: number = 1

  setValue(addedVal: number){
    this.value += addedVal
  }
}
