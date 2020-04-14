//Word Lists
var franchisea = "Steven Universe,Adventure Time,Ninjago: Masters of Spinjitsu,Once Upon a Time,She-Ra (2018),Pokémon (Games),Pokémon (Anime)";
var franchiseb = "Once Upon A Time";
var ouatprompts = "Characters are cursed and sent to a mundane town to with a new identity and new memories.,One character is now the Dark One and must struggle against their own dark magic.,Characters are cursed and sent to a mundane town to with a new identity and new memories.,Characters are cursed and sent to a mundane town to with a new identity and new memories.";
//Split Arrays
var farraya = franchisea.split(",");
var farrayb = franchiseb.split(",");
var ouatarray = ouatprompts.split(",");

//Functions
var lines = [ farraya, [" characters in a  "], farrayb, ["setting."],];
var prompts = [ ouatarray, [" testa "],];
