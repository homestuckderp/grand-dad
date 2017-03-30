G.AddData({
name:'GRAND DAD',
author:'meme',
desc:'what i am doing with my life',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	//The idea in this simple example mod is to add a few elements focused around hot sauce, because hot sauce is great and I use that stuff everywhere.
	
	//First we create a couple new resources :
	new G.Res({
		name:'Grand Dad',
		desc:'The Grandest of all Dads.//I am not sorry, Orteil.',
		startWith:1,
		visible:true,
		partOf:'population',
    category:'demog',
		icon:[5,3],
	});
});
