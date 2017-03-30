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
		desc:'The lowest troll caste, also known as rustbloods.//They are usually blessed with psychic powers, but are also psychically vulnearble, and lack in physical power.//Average lifespan is 40 years.', //Using human years for now
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[0,0,'hemoSheet'],
	});
		new G.Res({
		name:'Brown',
		desc:'The second lowest troll caste, also known as bronzebloods.//They are less likely to gain psychic powers than burgundy, but are also less vulnerable to them and a bit stronger.//Average lifespan is 60 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[1,0,'hemoSheet'],
	});
			new G.Res({
		name:'Yellow',
		desc:'The third troll case in rising hemospectrum order, also known as ochre or goldbloods.//Psychic and strength-wise, they are to brown what brown are to burgundy. On rare occasions, their psychic powers are much stronger than normally. //Average lifespan is 70 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[2,0,'hemoSheet'],
	});
		new G.Res({
		name:'Olive',
		desc:'Olivebloods are the first caste to not be considered low class.//They do not have any psychic powers or superstrength of the other castes, but are also relatively calm and do lack psychic vulnerability, making them the middleroad of other castes.//Passing the century mark ,their average lifespan is 115 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[4,0,'hemoSheet'],
	});
			new G.Res({
		name:'Jade',
		desc:'Jadebloods are far and few between, to the point that males are almost unheard of.//These trolls possess strong maternal instinct and will not tolerate anyone who threatens the grubs.//Unlike the other troll castes, they are not harmed by the sunlight and in fact, enjoy it. A Jadeblood has potential to become a Rainbow Drinker, greatly increasing their power and agility.//Average lifespan is 170 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[5,0,'hemoSheet'],
	});
				new G.Res({
		name:'Teal',
		desc:'Tealbloods, also known as aquabloods, are considered the lower end of upper class.//They are known for their cunning intelligence and due to starting the second half of hemospectrum, above average physical strength.//Tealbloods are the first blood caste with long lifespan, averaging at 400 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[6,0,'hemoSheet'],
	});
					new G.Res({
		name:'Cerulean',
		desc:'The eight blood caste, also known as cobalt bloods.//Similarly to teal, they are cunning and quick to act. Few cerulean bloods are known to be born with psychic powers, which is otherwise unheard of for higher classes.//Ceruleanbloods lifespan are quite long, surprassing the millenia mark and averaging at about 1100 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[0,1,'hemoSheet'],
	});
						new G.Res({
		name:'Indigo',
		desc:'Indigo bloods are considering nobility, consisting mostly of males.//They are the first caste to show violent tendencies and immunity to psychic powers. On rare occasions an indigoblood is born with even more strength than usual, possibly rivaling that of fuchsia.//Average lifespan is 2000 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[1,1,'hemoSheet'],
	});
							new G.Res({
			name:'Purple',
		desc:'Purplebloods mark the last land-dwelling caste and tend to be male.//They are usually violent and possess huge strength.//Infamous part of purple caste is chucklevoodo, a special gift that does... things. //Average lifespan is 2500 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[2,1,'hemoSheet'],
	});
							new G.Res({
				name:'Violet',
		desc:'The first aquatic caste of trolls, violets are considered royalty.//Very strong and very violent, they are usually free to do whatever they want, answering only to fuchsia.//Average lifespan is 5000 years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[3,1,'hemoSheet'],
	});
							new G.Res({
					name:'Fuchsia',
		desc:'The highest troll caste, also known as tyrianbloods, they are by far the rarest blood.//Destined to rule over the troll civilization, fuchsiabloods are incredibly strong, but unlike other highbloods, they usually keep their violent tendencies in check.//Fuchsia lifespan is incredibly long, averaging at 25 thousand years.',
		startWith:1,
		visible:true,
		partOf:'population',
                category:'demog',
		icon:[4,1,'hemoSheet'],
	});
}
});
