import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
let gender = await ti.promptYesOrNo("Are you a boy?");
if (gender === true) {
  let work = await ti.promptYesOrNo("Do you have a j*b?");
  if (work === true) {
    ti.output("HOMER!"); 
  } else 
    { let skateboard = await ti.promptYesOrNo("Do you like skateboarding?"); 
      if (skateboard === true) {ti.output("BART!");
      } else {
        let Old = await ti.promptYesOrNo("Do you feel old?");
        if (Old === true) {
          ti.output("ABE!");
        } else {
      ti.output("SANTA'S LITTLE HELPER!");
    }
      }
  }
} else {
  let saxophone = await ti.promptYesOrNo("Do you like the saxophone?")
  if (saxophone === true) {
    ti.output("LISA!");
  } else {

  }
  }
