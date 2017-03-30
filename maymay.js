G.AddData({
name:'Troll mod',
author:'Homestuck Derp',
desc:'here be trolls.',
engineVersion:1,
manifest:'trollManifest.js',
requires:['Default dataset*'],
sheets:{'hemoSheet':'http://i.imgur.com/t7xHpVi.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	new G.Res({
		name:'Burgundy',
		desc:'The lowest case of troll, also known as rustbloods.//They are usually blessed with psychic powers, but are also psychically vulnearble, and lack in physical power.//Average lifespan is 40 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[0,0,'hemoSheet'],
	});
}
});
