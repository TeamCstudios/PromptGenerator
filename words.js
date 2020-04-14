//Franchise Lists
var franchisea = "Steven Universe,Adventure Time,Ninjago: Masters of Spinjitsu,Once Upon a Time,She-Ra (2018),Pokémon (Games),Pokémon (Anime),Undertale,Death Note,Parks And Recreation,The Office,Star Wars (Original),Star Wars (Prequel),Star Wars (Sequel)";
var franchiseb = "Once Upon A Time,Pokémon,Doctor Who,Undertale,Death Note, Parks and Recreation";
//Prompt Lists
var ouatprompts = "Characters are cursed and sent to a mundane town to with a new identity and new memories.,One character is now the Dark One and must struggle against their own dark magic.,Characters are cursed and sent to a mundane town to with a new identity and new memories.,Characters are cursed and sent to a mundane town to with a new identity and new memories.";
var pkmnprompts = "Several characters are Pokémon Trainers in the Kalos Region.,Several characters are Pokémon Trainers in the Kanto Region.,Several characters are Pokémon Trainers in the Sinnoh Region.,Several characters are Pokémon Trainers in the Johto Region.,Several characters are Pokémon Trainers in the Hoenn Region."
var whoprompts = "One character is a Time Lord and has a TARDIS."
var undrprompts = "Characters were banished to The Underground long ago. Another character (original or not) falls into the Underground and meets all the characters trapped inside."
var denoprompts = "One character obtains a Death Note and uses it to exact vengance on who they see as evil. Another character or characters make it their mission to stop them.,Multiple characters obtain a Death Note and use it to each exact their own ideologies. The world falls into chaos."
var pnrprompts = "Several characters work in the local government of Pawnee, Indiana. Hijinks ensue."
//Split Arrays
var farraya = franchisea.split(",");
var farrayb = franchiseb.split(",");
var ouatarray = ouatprompts.split(",");
var pkmnarray = pkmnprompts.split(",");
var whoarray = whoprompts.split(",");
var undrarray = undrprompts.split(",");
var denoarray = denoprompts.split(",");
var pnrarray = pnrprompts.split("|");

//Functions
var lines = [ farraya, [" characters in a  "], farrayb, ["setting."],];
var prompts = [ ouatarray, pkmnarray, whoarray, undrarray, denoarray, pnrarray];
