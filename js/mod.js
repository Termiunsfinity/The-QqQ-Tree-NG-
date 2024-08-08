let modInfo = {
	name: "The QqQ Tree",
	id: "QqQ",
	author: "QqQeInfinity",
	pointsName: "QqQe308",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (308), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "QqQe308",
	name: "Arcaea is SB",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>QqQe308</h3><br>
		- Added the whole game.<br>
		- Endgame: (e^114,514)1,919,810 QqQe308.`

let winText = `恭喜！你通关了！`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (hasUpgrade('Q', 12)) gain = new Decimal(1.79e308)
	if (hasUpgrade('Q', 13)) gain = gain.times(upgradeEffect('Q', 13))
	if (hasUpgrade('Q', 14)) gain = gain.times(upgradeEffect('Q', 14))
	if (hasUpgrade('Q', 15)) gain = gain.times(upgradeEffect('Q', 15))
	if (hasUpgrade('Q', 21)) gain = gain.times(upgradeEffect('Q', 21))
	if (hasUpgrade('Q', 22)) gain = gain.pow(upgradeEffect('Q', 22))
	if (hasUpgrade('L', 12)) gain = tetrate(gain.pow(2.25),1.05,1)
	if (hasUpgrade('L', 13)) gain = tetrate(gain.pow(2.25),1.01,1)
	if (hasUpgrade('L', 22)) gain = tetrate(gain.pow(2.25),Math.sqrt(gain.layer+10),1)
	if (hasUpgrade('L', 21)) gain = tetrate(gain.pow(2.25),Math.sqrt(gain.layer+10)/10,1)
	if (gain.gte("(e^308)179")) gain = tetrate(gain,0.9)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("(e^114514)1919810"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}