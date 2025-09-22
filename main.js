import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let playing = true;
let ti = new TextInterface(app, "Think of Simpson's family character");
while (playing) {
  let name = await ti.prompt("What is your name?");
  ti.output("Hello, " + name);
  let gender = await ti.promptYesOrNo("Are you a boy?");
  if (gender === true) {
    //gender
    let work = await ti.promptYesOrNo("Do you have a j*b?");
    if (work === true) {
      //if true homer if false keep going
      ti.output("HOMER!");
      ti.showImage("Homer_Simpson_2006.png");
    } else {
      let skateboard = await ti.promptYesOrNo("Do you like skateboarding?");
      if (skateboard === true) {
        //bart
        ti.output("BART!");
        ti.showImage("Bart_Simpson_200px.png");
      } else {
        let Old = await ti.promptYesOrNo("Do you have back problems?");
        if (Old === true) {
          //abe
          ti.output("ABE!");
          ti.showImage("Abe_Simpson.png");
        } else {
          ti.output("SANTA'S LITTLE HELPER!");
          ti.showImage("SantasLittleHelper.png");
        }
      }
    }
  } else {
    let Shopping = await ti.promptYesOrNo("Do you go shopping?");
    if (Shopping === true) {
      //shoping
      let Adult = await ti.promptYesOrNo("Are you an adult?");
      if (Adult === true) {
        //adult marge or maggie
        ti.output("MARGE!");
        TimeRanges.showImage("Marge_Simpson.png");
      } else {
        ti.output("MAGGIE!");
        ti.showImage("Maggie_Simpson.png");
      }
    } else {
      let Saxophone = await ti.promptYesOrNo("Do you play the saxophone?");
      if (Saxophone === true) {
        //sax
        ti.output("LISA!");
        ti.showImage("Lisa_Simpson.png");
      } else {
        let living = await ti.promptYesOrNo("Are you alive?");
        if (living === true) {
          //alive
          ti.output("SNOWBALL 2!");
        } else {
          ti.output("SNOWBALL 1!");
          ti.showImage("Snowball_I_Tapped_Out.webp");
          ti.showImage("30x15_Snowball.webp");
        }
      }
    }
  }

  let final = await ti.promptYesOrNo("did i get it right");
  if (final === true) {
    //final
    let restart = await ti.promptYesOrNo("do you want to play again");
    {
      if (restart === true) {
        //play again
        playing === false;
      } else {
        ti.output("bye then");
        playing = false
      }
    }
  } else {
    ti.output("LIAR");
    let restart = await ti.promptYesOrNo("do you want to play again");
    {
      if (restart === true) {
      } else {
         ti.output("bye then");
         playing = false
      }
    }
  }
}
