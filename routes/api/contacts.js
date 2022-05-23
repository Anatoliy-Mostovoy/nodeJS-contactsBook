const express = require("express");
const contactsAll = require("../../model/index.js");
const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    const contacts = await contactsAll.getContacts();
    res.status(200).json({ status: "success", code: 200, data: { contacts } });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contact = await contactsAll.addContact(req.body);
    res.status(201).json({ status: "success", code: 201, data: { contact } });
  } catch (error) {
    next(error);
  }
});

router.delete("/:params", async (req, res, next) => {
  console.log(req.params);
  try {
    const contact = await contactsAll.deleteContact(req.params);
    res.status(200).json({ status: "success", code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
