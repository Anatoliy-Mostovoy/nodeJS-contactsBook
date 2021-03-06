const express = require("express");
const contactsAll = require("../../model/index.js");
const router = express.Router();
const { validateContact, validateId } = require("./validation.js");

router.get("/", async (_req, res, next) => {
  try {
    const contacts = await contactsAll.getContacts();
    res.status(200).json({ status: "success", code: 200, data: { contacts } });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", validateId, async (req, res, next) => {
  try {
    const contact = await contactsAll.getContactById(req.params.id);
    if (!contact) {
      return res
        .status(404)
        .json({ status: "error", code: 404, message: "Not found" });
    }
    return res
      .status(200)
      .json({ status: "success", code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
});

router.post("/", validateContact, async (req, res, next) => {
  try {
    const contact = await contactsAll.addContact(req.body);
    res.status(201).json({ status: "success", code: 201, data: { contact } });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateId, validateContact, async (req, res, next) => {
  try {
    const contact = await contactsAll.updateContacts(req.params.id, req.body);
    if (!contact) {
      return res
        .status(404)
        .json({ status: "error", code: 404, message: "Not found" });
    }

    return res
      .status(201)
      .json({ status: "success", code: 201, data: { contact } });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", validateId, async (req, res, next) => {
  console.log(req.params.id);
  try {
    const contact = await contactsAll.deleteContact(req.params.id);
    res.status(200).json({ status: "success", code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
