const express = require("express");
const router = express.Router();
const controller = require("../Controllers/plancontroller");

router.post("/", controller.createPlan);
router.get("/", controller.getAllPlans);
router.get("/:id", controller.getPlanById);
router.patch("/:id", controller.updatePlan);
router.delete("/:id", controller.deletePlan);

module.exports = router;
