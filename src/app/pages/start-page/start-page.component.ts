import { Component } from '@angular/core'

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  state: 'open' | 'close' = 'close'

  setPageState(state: 'open' | 'close') {
    this.state = state
  }

  openForm() {
    const input = document.querySelector('#open-form-input') as HTMLInputElement
    if (input.value.length > 0) {
      document.location.href = `/form/${input.value}`
    }


  }

}
