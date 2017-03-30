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
manifest:'trollManifest.js',
requires:['Default dataset*'],
sheets:{'hemoSheet':'http://i.imgur.com/WYAXeNl.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	new G.Res({
		name:'Burgundy',
		desc:'The lowest case of troll, also known as rustbloods.//They are usually blessed with psychic powers, but are also psychically vulnearble, and lack in physical power.//Average lifespan is 40 years.'
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[0,0,'hemoSheet'],
	});
}
});
