const User = require("../models/userModel");
const Vehicle = require("../models/vehicleModel");
const qrcode = require("qrcode");

const createVehicle = async (req, res) => {
  let { user } = req;
  let { vehicle_details } = req.body;

  vehicle_details = { ...vehicle_details, user_id: user._id };

  try {
    const created_vehicle = await Vehicle.create(vehicle_details);

    if (!created_vehicle) {
      return res.json({
        message: "error creating vehicle",
      });
    }

    await User.findOneAndUpdate(
      { _id: user._id },
      {
        $push: {
          vehicles: created_vehicle._id,
        },
      }
    );

    const code = await qrcode.toDataURL(String(created_vehicle._id));
    created_vehicle.qr_code = code;

    await created_vehicle.save();

    return res.json({
      message: "vehicle created successfully",
      created_vehicle,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: error.message,
    });
  }
};

const getVehicle = async (req, res) => {
  const vehicle_id = req.params.vehicle_id;
  try {
    const vehicle = await Vehicle.findById(vehicle_id);
    if (!vehicle) {
      return res.json({
        message: "no such vehicle found",
      });
    }

    return res.json({
      message: "vehicle found successfully",
      vehicle,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: error.message,
    });
  }
};

module.exports = { createVehicle, getVehicle };
