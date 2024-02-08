const router = require("express").Router();
const {createVehicle, getVehicle} = require("../controllers/vehicleControllers")

router.post("/", createVehicle);

router.get("/:vehicle_id", getVehicle);

module.exports = router