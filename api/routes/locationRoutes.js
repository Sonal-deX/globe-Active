const Router = require("express");

const locationRouter = Router();


locationRouter.get("/", (req, res) => {
    res.set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
    );
    res.render("locations/locationList");
  });


  locationRouter.get("/MainOfficeColombo", (req, res) => {
    res.set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
    );
    res.render("locations/Awissawella");
  });

  locationRouter.get("/Katunayaka", (req, res) => {
    res.set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
    );
    res.render("locations/Katunayaka");
  });

  locationRouter.get("/Biyagama", (req, res) => {
    res.set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
    );
    res.render("locations/Biyagama");
  });
  locationRouter.get("/Awissawella", (req, res) => {
    res.set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
    );
    res.render("locations/Awissawella");
  });


  
module.exports = locationRouter;