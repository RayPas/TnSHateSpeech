// __________
// Button click action
// __________
let button = document.getElementById("btn");
button.onclick = function () {

    // Dictionary to sift through

    let words = 
    ["10% Off",   
    "Abco",
    "Abeed",
    "Ace Of Spades",
    "African't",
    "Afro-Saxon",
    "Aibu",
    "Aladdin",
    "Alcoholic",
    "American't",
    "Ancient Chinese Secret",
    "Angus",
    "Ape",
    "Apple",
    "Aravi",
    "Arm Pits",
    "Ashy",
    "Ayatollah",
    "Baboomba",
    "Baby-Muncher",
    "Bagel-Dog",
    "Baijo",
    "Bamboo Coon",
    "Banana Bender",
    "Banjo Lips",
    "Bar Code",
    "Bat-gwai/Bai-guei",
    "Bazi",
    "BDN",
    "Bean Burrito",
    "Beaner",
    "Beaniard",
    "Beastie Boy",
    "Bed Time",
    "Beggar",
    "BET",
    "Beur",
    "Bhindu",
    "Bic-Needer",
    "Big Nose",
    "bulldyke",
    "butt pirate",
    "Coon",
    "dindu",
    "dyke",
    "Easy-Bake Nigger",
    "Eucalyptus Nigger",
    "fag",
    "fag drag",
    "faggot",
    "Gook",
    "House Nigger",
    "Ice Nigger",
    "jigaboo",
    "Kike",
    "Lava Nigger",
    "Marsh Nigger",
    "McSpic",
    "Negress",
    "Niggabyte",
    "Nigger",
    "Nigger mortis",
    "Niggerican",
    "Nigglet",
    "queer",
    "Sand Nigger",
    "spic",
    "Spook",
    "Squint Nigger",
    "Swamp Kike",
    "tar baby",
    "Tranny",
    "Troomer",
    "Troon",
    "Welfare Monkey",
    "Wetback",
    "WOP",]

    let map = {};
    // Store the words into a map
    for(const n of words){
        map[n] = true;
    }
    // Javascript to read the page

    const globalWordsStore = new Map();
const setOfWords = ['Hello', 'World']
function populateStore(el){
  let n;
  let a=[];
  let walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) {
    const arrayOfWords = n.data.trim().split(" ");
    arrayOfWords.forEach((ele) => {
      if(setOfWords.includes(ele)){
        if(globalWordsStore.has(ele)){
        globalWordsStore.set(ele, globalWordsStore.get(ele) + 1);
      } else {
        globalWordsStore.set(ele, 1);
      }
      }
    })
  }
}

populateStore(document.getElementsByTagName('body')[0]);

for (const [key, value] of globalWordsStore.entries()) {
  // key --> word
  // value --> count of that partivular word
  console.log(key, value);
}
    
    // if ( in map){
    //     console.log(true)
    // } else {
    //     console.log(false)
    // }
}



