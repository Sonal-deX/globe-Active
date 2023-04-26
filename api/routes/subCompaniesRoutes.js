const Router = require("express");

const routersubcompanies = Router();

routersubcompanies.get("/", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  );
  res.render("subCompanies");
});

//companies

routersubcompanies.get("/Globactivcargo", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  );
  res.render("subCompanies/Globactivcargo");
});

routersubcompanies.get("/Globactivgroup", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  );
  res.render("subCompanies/Globactivgroup");
});

routersubcompanies.get("/Globactivlogistics", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  );
  res.render("subCompanies/Globactivlogistics");
});
routersubcompanies.get("/Globactivrealties", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  );
  res.render("subCompanies/Globactivrealties");
});
routersubcompanies.get("/GlobactivSolutions", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  );
  res.render("subCompanies/GlobactivSolutions");
});

routersubcompanies.get("/GlobactivTransport", (req, res) => {
    res.set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
    );
    res.render("subCompanies/GlobactivTransport");
  });



module.exports = routersubcompanies;
