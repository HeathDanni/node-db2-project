const express = require("express")
const db = require("../data/connect")

const router = express.Router()

router.get("/cars", async (req, res, next) => {
    try{
        res.json(await db("cars"))
    } catch(err) {
        next(err)
    }
})

router.get("/cars/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        const car = await db("cars").where({id}).first()

        res.json(car)
    } catch(err) {
        next(err)
    }
})

module.exports = router