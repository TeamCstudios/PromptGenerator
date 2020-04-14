//Franchise Lists
var franchisea = "Steven Universe,Adventure Time,Ninjago: Masters of Spinjitsu,Once Upon a Time,She-Ra (2018),Pokémon (Games),Pokémon (Anime)";
var franchiseb = "Once Upon A Time,Pokémon,Doctor Who";
//Prompt Lists
var ouatprompts = "Characters are cursed and sent to a mundane town to with a new identity and new memories.,One character is now the Dark One and must struggle against their own dark magic.,Characters are cursed and sent to a mundane town to with a new identity and new memories.,Characters are cursed and sent to a mundane town to with a new identity and new memories.";
var pkmnprompts = "Several characters are Pokémon Trainers in the Kalos Region.,Several characters are Pokémon Trainers in the Kanto Region.,Several characters are Pokémon Trainers in the Sinnoh Region.,Several characters are Pokémon Trainers in the Johto Region.,Several characters are Pokémon Trainers in the Hoenn Region."
var whoprompts = "One character is a Time Lord and has a TARDIS."
//Split Arrays
var farraya = franchisea.split(",");
var farrayb = franchiseb.split(",");
var ouatarray = ouatprompts.split(",");
var pkmnarray = pkmnprompts.split(",");
var whoarray = whoprompts.split(",");

//Functions
var lines = [ farraya, [" characters in a  "], farrayb, ["setting."],];
var prompts = [ ouatarray, pkmnarray, whoarray];
