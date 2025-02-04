export async function compareTypes(type1, type2, type3, type4) {
   
   //types 1 & 2 -> Pokemon 1
   //types 3 & 4 -> Pokemon 2
   
   // -2 = no effect on second poke
   // -1 = little effect on second poke
   // 0 = neutral against second poke
   // 1 = 2x effective against second poke
   // 2 = 4x effective against second poke

   if ((type1 == "???" && type2 == "???") || (type3 == "???" && type4 == "???")) {
      //No second Pokemon to compare to
      return -10;
   }

   var effectiveness1 = 1;
   var effectiveness2 = 1;
   var effectiveness3 = 1;
   var effectiveness4 = 1;
   var effectiveness5 = 1;
   var effectiveness6 = 1;
   var effectiveness7 = 1;
   var effectiveness8 = 1;
   var result = 0;

   //Cross-compare the first types of the two Pokemon
   effectiveness1 = await compareTypesHelper(type1, type3);
   effectiveness5 = await compareTypesHelper(type3, type1);
   
   if (type2 != "" && type4 != "") {
      //Pokemon 1's & 2's type 2 exists
      //Cross compare both their types
      effectiveness2 = await compareTypesHelper(type1, type4);
      effectiveness3 = await compareTypesHelper(type2, type4);
      effectiveness4 = await compareTypesHelper(type2, type3);
      effectiveness6 = await compareTypesHelper(type4, type1);
      effectiveness7 = await compareTypesHelper(type4, type2);
      effectiveness8 = await compareTypesHelper(type3, type2);
      result = (effectiveness1 - effectiveness5) + (effectiveness2 - effectiveness6) + (effectiveness3 - effectiveness7) + (effectiveness4 - effectiveness8);
   } else if (type2 != "" && type4 == "") {
      //Pokemon 1's type 2 exists, Pokemon 2's doesn't
      //Cross compare Pokemon 1's two types to Pokemon 2's 1 type
      effectiveness4 = await compareTypesHelper(type2, type3);
      effectiveness8 = await compareTypesHelper(type3, type2);
      result = (effectiveness1 - effectiveness5) + (effectiveness4 - effectiveness8);

   } else if (type2 == "" && type4 != "") {
      //Pokemon 2's type 2 exists, Pokemon 1's doesn't
      //Cross compare Pokemon 2's two types to Pokemon 1's 1 type
      effectiveness2 = await compareTypesHelper(type1, type4);
      effectiveness6 = await compareTypesHelper(type4, type1);
      result = (effectiveness1 - effectiveness5) + (effectiveness2 - effectiveness6);
      
   } else {
      //Only 1 type assumed for both Pokemon
      //Cross compare both Pokemon's one type
      result = (effectiveness1 - effectiveness5);
   }
   return result;

   
   
};
async function compareTypesHelper(poke1Type, poke2Type) {
   //Information based on the chart on https://pokemondb.net/type
   //poke1 = attacker
   //poke2 = defender
   //Return vals:
   // -2 = no effect on second poke
   // -1 = little effect on second poke
   // 0 = neutral against second poke
   // 1 = 2x effective against second poke

   //Using a data structure to contain all the elements and selecting the index for each typing contained in a hashtable.
   const typingMap = new Map();
   typingMap.set("normal", 0);
   typingMap.set("fire", 1);
   typingMap.set("water", 2);
   typingMap.set("electric", 3);
   typingMap.set("grass", 4);
   typingMap.set("ice", 5);
   typingMap.set("fighting", 6);
   typingMap.set("poison", 7);
   typingMap.set("ground", 8);
   typingMap.set("flying", 9);
   typingMap.set("psychic", 10);
   typingMap.set("bug", 11);
   typingMap.set("rock", 12);
   typingMap.set("ghost", 13);
   typingMap.set("dragon", 14);
   typingMap.set("dark", 15);
   typingMap.set("steel", 16);
   typingMap.set("fairy", 17);
   var typingMatrix = [[0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,0,0,-1,0],     //0. Normal
                       [0,-1,-1,0,1,1,0,0,0,0,0,1,-1,0,-1,0,1,0],    //1. Fire
                       [0,1,-1,0,-1,0,0,0,1,0,0,0,1,0,-1,0,0,0],     //2. Water
                       [0,0,1,-1,-1,0,0,0,-2,1,0,0,0,0,-1,0,0,0],    //3. Electric
                       [0,-1,1,0,-1,0,0,-1,1,-1,0,-1,1,0,-1,0,-1,0], //4. Grass
                       [0,-1,-1,0,1,-1,0,0,1,1,0,0,0,0,1,0,-1,0],    //5. Ice
                       [1,0,0,0,0,1,0,-1,0,-1,-1,-1,1,-2,0,1,1,-1],  //6. Fighting
                       [0,0,0,0,1,0,0,-1,-1,0,0,0,-1,-1,0,0,-2,1],   //7. Poison
                       [0,1,0,1,-1,0,0,1,0,-2,0,-1,1,0,0,0,1,0],     //8. Ground
                       [0,0,0,-1,1,0,1,0,0,0,0,1,-1,0,0,0,-1,0],     //9. Flying
                       [0,0,0,0,0,0,1,1,0,0,-1,0,0,0,0,-2,-1,0],     //10. Psychic
                       [0,-1,0,0,1,0,-1,-1,0,-1,1,0,0,-1,0,1,-1,-1], //11. Bug
                       [0,1,0,0,0,1,-1,0,-1,1,0,1,0,0,0,0,-1,0],     //12. Rock 
                       [-2,0,0,0,0,0,0,0,0,0,1,0,0,1,0,-1,0,0],      //13. Ghost
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,-1,-2],      //14. Dragon
                       [0,0,0,0,0,0,-1,0,0,0,1,0,0,1,0,-1,0,-1],     //15. Dark
                       [0,-1,-1,-1,0,1,0,0,0,0,0,0,1,0,0,0,-1,1],    //16. Steel
                       [0,-1,0,0,0,0,1,-1,0,0,0,0,0,0,1,1,-1,0]];    //17. Fairy

   //Simply get the x and y coordinates from the map
   var typePositionX = typingMap.get(poke1Type);
   var typePositionY = typingMap.get(poke2Type);
   // console.log("X: ", typePositionX, "Y: ", typePositionY);

   //Get the table entry for from the matrix using these coorindates to return the effectiveness value
   var result = typingMatrix[typePositionX][typePositionY];
   console.log(result);
   return result;
};
