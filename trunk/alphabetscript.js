/*  
    Author: Julien Letellier
    E-Mail: letellier.julien@gmail.com
*/

/* Specifies the total number fo letters */
var numberOfLetters = 26;
/* Contains the randomly generated number */
var letter = 0;
/* Letters */
var letters = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
/* ASCII-Code */
var ascii = new Array("65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90");
/* Morse Code */
var morsecode = new Array(".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..");
/* Morse Code: English mnemonics */
var mnemonics = new Array("a-BOUT","BOIS-ter-ous-ly","CHAR-lie's AN-gels","DAN-ge-rous","eh?","fe-ne-STRA-tion","GOOD GRA-vy","hee hee hee hee","aye aye","ju-LY'S JANE JONES","KET-tle KORN","li-NO-le-um","MORE MILK","NA-vy","OH MY GOD","pa-RADE PAN-el","QUEEN'S WED-ding DAY","ro-TA-tion","si si si","THRUST","un-der WHERE?","va-va-va-VOOM","with WHITE WHALE","EX-tra ex-PENSE","YEL-low YO-YO","ZINC ZOO-keep-er");
/* NATO english phonetic alphabet */
var phoneticEnglish = new Array("Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","Xray","Yankee","Zulu");
/* German phonetic alphabet */
var phoneticGerman = new Array("Anton","Berta","Cäsar","Dora","Emil","Friedrich","Gustav","Heinrich","Ida","Julius","Kaufmann","Ludwig","Martha","Nordpol","Otto","Paula","Quelle","Richard","Samuel","Theodor","Ulrich","Viktor","Wilhelm","Xanthippe","Ypsilon","Zacharias");

function load()
{
    /* Resets everything */
    document.getElementById("asciiIN").value = "ASCII Code";
    document.getElementById("asciiIN").style.backgroundColor = "white";
    document.getElementById("morsecodeIN").value = "Morse Code";
    document.getElementById("morsecodeIN").style.backgroundColor = "white";
    document.getElementById("mnemonicsIN").value = "Morse Code Mnemonic";
    document.getElementById("mnemonicsIN").style.backgroundColor = "white";
    document.getElementById("phoneticEnglishIN").value = "NATO Phonetic";
    document.getElementById("phoneticEnglishIN").style.backgroundColor = "white";
    document.getElementById("phoneticGermanIN").value = "German Phonetic";
    document.getElementById("phoneticGermanIN").style.backgroundColor = "white";
    /* Generates a random number */
    letter = Math.round((numberOfLetters - 1)*(Math.random()));
    /* Displays the generated letter */
    document.getElementById("letterOut").firstChild.nodeValue = letters[letter];
}

function changeInputValue(id, value, isFocus)
{
    /* Changes the value of the input field */
    if (document.getElementById(id).value == value || document.getElementById(id).value == "")
    {
      if (isFocus)
        document.getElementById(id).value = "";
      else
        document.getElementById(id).value = value;
    }
}

function check()
{
    /* Checks if the answers are correct */
    if (document.getElementById("asciiIN").value == ascii[letter])
      //richtige Eingabe
      document.getElementById("asciiIN").style.backgroundColor = "green"
    else if (document.getElementById("asciiIN").value == "ASCII Code")
      //keine Eingabe
      document.getElementById("asciiIN").style.backgroundColor = "white"
    else
      //falsche Eingabe
      document.getElementById("asciiIN").style.backgroundColor = "red";
    if (document.getElementById("morsecodeIN").value == morsecode[letter])
      //richtige Eingabe
      document.getElementById("morsecodeIN").style.backgroundColor = "green"
    else if (document.getElementById("morsecodeIN").value == "Morse Code")
      //keine Eingabe
      document.getElementById("morsecodeIN").style.backgroundColor = "white"
    else
      //falsche Eingabe
      document.getElementById("morsecodeIN").style.backgroundColor = "red";
    if (document.getElementById("mnemonicsIN").value == mnemonics[letter])
      //richtige Eingabe
      document.getElementById("mnemonicsIN").style.backgroundColor = "green"
    else if (document.getElementById("mnemonicsIN").value == "Morse Code Mnemonic")
      //keine Eingabe
      document.getElementById("mnemonicsIN").style.backgroundColor = "white"
    else
      //falsche Eingabe
      document.getElementById("mnemonicsIN").style.backgroundColor = "red";
    if (document.getElementById("phoneticEnglishIN").value == phoneticEnglish[letter])
      //richtige Eingabe
      document.getElementById("phoneticEnglishIN").style.backgroundColor = "green"
    else if (document.getElementById("phoneticEnglishIN").value == "NATO Phonetic")
      //keine Eingabe
      document.getElementById("phoneticEnglishIN").style.backgroundColor = "white"
    else
      //falsche Eingabe
      document.getElementById("phoneticEnglishIN").style.backgroundColor = "red";
    if (document.getElementById("phoneticGermanIN").value == phoneticGerman[letter])
      //richtige Eingabe
      document.getElementById("phoneticGermanIN").style.backgroundColor = "green"
    else if (document.getElementById("phoneticGermanIN").value == "German Phonetic")
      //keine Eingabe
      document.getElementById("phoneticGermanIN").style.backgroundColor = "white"
    else
      //falsche Eingabe
      document.getElementById("phoneticGermanIN").style.backgroundColor = "red";
}

function show()
{
    document.getElementById("asciiIN").value = ascii[letter];
    document.getElementById("morsecodeIN").value = morsecode[letter];
    document.getElementById("mnemonicsIN").value = mnemonics[letter];
    document.getElementById("phoneticEnglishIN").value = phoneticEnglish[letter];
    document.getElementById("phoneticGermanIN").value = phoneticGerman[letter];
}