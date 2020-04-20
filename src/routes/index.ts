import { Router } from "express";
import { userValidation } from "../../utils/validation";
import { User } from "../models/user";

const router = Router();

router.post("/api/submit", async (req, res) => {
  console.log("heey");
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const details = await new User({ ...req.body });

  try {
    const savedDetails = await details.save();
    res.status(201).send({
      details: savedDetails,
    });
  } catch (e) {
    console.log("buda....");
    res.send({ e });
  }
});

export default router;
