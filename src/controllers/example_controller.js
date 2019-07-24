import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "source" ]

  connect() {
    this.element.textContent = "It works!"
  }
}
