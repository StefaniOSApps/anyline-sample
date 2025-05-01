import { Component } from '@angular/core';
import { AnylineJS, State } from '@anyline/anyline-js/types/Anyline-JS/interface/api';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anyline-sample';
  private anyline: AnylineJS | undefined;

  async scanViewClicked(): Promise<void> {
    if (!this.anyline) {
      return;
    }

    switch (this.anyline.getState()) {
      case State.DISPOSED:
        break
      case State.STOPPED:
        break;
      case State.PAUSED:
        break;
      case State.SCANNING:
        break;
      case State.DISPOSED:
        break;
    }
  }
}
