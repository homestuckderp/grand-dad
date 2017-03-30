//v1.7
//1.7 Nerfed honeycomb generation and bee generation
//1.6 Changed imgur link to 48x48 icons instead of 15x15
//1.5 Nerfed Honeycomb generation
//1.4 Added Honeysheet and linked to imgur link
//1.3 Changed Manifest from modManifest.js
//1.2 Fixed Bracket
//1.1 Fixed Bracket
G.AddData({
name:'Troll mod',
author:'Homestuck Derp',
desc:'here be trolls.',
engineVersion:1,
manifest:'trollmanifest.js',
requires:['Default dataset*'],
sheets:{'grandDad':'http://i.imgur.com/zurxuna.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	new G.Res({
		name:'Grand Dad',
		desc:'The Grandest of all Dads.//I am not sorry, Orteil.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[5,3,'grandDad'],
	});
}
});
