// src/controllers/hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this.nameTarget.value
  }
}


// // src/controllers/hello_controller.js
// import { Controller } from "stimulus"

// export default class extends Controller {
//   static targets = [ "name" ]

//   greet() {
//     const element = this.nameTarget
//     const name = element.value
//     console.log(`Hello, ${name}!`)
//   }
// }