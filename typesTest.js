import { compareTypes } from "./compareTypes";
export function typesTest() {
   var type1 = "normal";
   var type2 = "";
   var type3 = "normal";
   var type4 = "";
   
   var test1 = compareTypes(type1, type2, type3, type4);
   if (test1 == 0) {
      console.log("TEST1: Success!");
   }

   var test2 = compareTypes(type3, type4, type1, type2);
   if (test2 == 0) {
      console.log("TEST2: Success!");
   }

}