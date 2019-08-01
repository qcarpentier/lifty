const router = require("express").Router();
let Bin = require("../models/bin.model");

router.route("/").get((req, res) => {
    Bin.find()
        .then(bins => res.json(bins))
        .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const binType = req.body.binType;
  const longitude = req.body.longitude ? Number(req.body.longitude) : 0;
  const latitude = req.body.latitude ? Number(req.body.latitude) : 0;
  const fillPercentage = req.body.fillPercentage;

  const location = {
      type: 'Point', 
      coordinates: [longitude, latitude]
  };

  const newBin = new Bin({ name, binType, location, fillPercentage });

  newBin
    .save()
    .then(() => res.json("Bin added!"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/:id").get((req, res) => {
  Bin.findById(req.params.id)
    .then(bin => res.json(bin))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/:id").delete((req, res) => {
    Bin.findByIdAndDelete(req.params.id)
    .then(() => res.json("Bin deleted."))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/update/:id").post((req, res) => {
    Bin.findById(req.params.id)
    .then(bin => {
        const location = {
            type: 'Point', 
            coordinates: [req.body.longitude, req.body.latitude]
        };

        bin.username = req.body.username;
        bin.binType = req.body.description;
        bin.location = location
        bin.fillPercentage = req.body.fillPercentage;
        bin
            .save()
            .then(() => res.json("Bin updated!"))
            .catch(error => res.status(400).json(`Error: ${error}`));
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
