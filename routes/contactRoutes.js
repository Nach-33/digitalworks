const router = require("express").Router();
const {getVehicle} = require("../controllers/vehicleControllers")

router.get("/:vehicle_id", getVehicle);

module.exports = router