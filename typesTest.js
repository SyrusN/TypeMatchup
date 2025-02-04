import { compareTypes } from './TypeMatchup/compareTypes.js';
export async function typesTest() {
   //Test the different pokemon types
   var type1 = "normal";
   var type2 = "";
   var type3 = "normal";
   var type4 = "";
   
   var test1 = compareTypes(type1, type2, type3, type4);
   console.log("Test1: ", await test1, " Expected: 0");
   
   type1 = "fighting";

   var test2 = compareTypes(type1, type2, type3, type4);
   console.log("Test2: ", await test2, " Expected: 1");
}