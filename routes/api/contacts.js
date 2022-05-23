const express = require("express");
const res = require("express/lib/response");
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

module.exports = router;
