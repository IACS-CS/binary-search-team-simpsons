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
    {ti.output("ABE!");

  }
} else {
  let saxophone = await ti.promptYesOrNo("Do you like the saxophone?")
  if (saxophone === true) {
    ti.output("LISA!")
  }
  }
