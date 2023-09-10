import { compareTypes } from './compareTypes.js'; //Comment out to make this thing work
export async function typesTest() {
   //Test the different pokemon types
   var type1 = "normal";
   var type2 = "";
   var type3 = "normal";
   var type4 = "";
   
   var test1 = compareTypes(type1, type2, type3, type4);
   console.log("Test1: ", await test1, " Expected: 0");
   
   type1 = "fighting";

   var outcome2 = document.getElementById("outcome");
   // var test2 = compareTypes(type3, type4, type1, type2);
   var test2 = compareTypes(type1, type2, type3, type4);
   console.log("Test2: ", await test2, " Expected: 1");
}