import { Component } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent {
  selectIsOpen: boolean = false

  setOpenState() {
    this.selectIsOpen = !this.selectIsOpen
  }
}
