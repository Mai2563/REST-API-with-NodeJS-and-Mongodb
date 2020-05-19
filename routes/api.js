// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const players = [
	{firstname:"eli", lastname: "manning", position: "qb", age:37, team:"nyg"},
	{firstname:"tom", lastname: "brady", position: "qb", age:41, team:"nep"},
	{firstname:"jj", lastname: "watt", position: "de", age:28, team:"hou"}
]

const teams = [
	{name:"giants", city:"new york", conference:"nfc"},
	{name:"patriots", city:"england", conference:"afc"},
	{name:"texans", city:"houston", conference:"afc"}
]

const db = {
	team: teams,
	player: players
}

router.get('/:resource', (req, res) => {
	const resource = req.params.resource

	const data = db[resource]
	if(data == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid request. Resource undefined.'
		})
		return
	}
	res.json({
		confirmation: 'success',
		data: data
	})

	// if(resource == 'team'){
	// 	res.json({
	// 		confirmation: 'success',
	// 		data: teams
	// 	})

	// 	return
	// }

	// if(resource == 'player'){
	// 	res.json({
	// 		confirmation: 'success',
	// 		data: players
	// 	})

	// 	return
	// }

	
})

// router.get('/player', (req, res) =>{
// 	res.json({
// 		confirmation: 'success',
// 		data: players
// 	})
// })

// router.get('/team', (req, res) =>{
// 	res.json({
// 		confirmation: 'success',
// 		data: teams
// 	})
// })

module.exports = router