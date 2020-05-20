// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/:resource',(req , res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.get()
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router