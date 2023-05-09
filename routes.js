
const axios = require('axios')
import { Router } from 'express';
import { contactFormclient, contactForm, careers, careersClient } from './api/helpers/email-sender'

const router = Router();

router.get('/', (req, res) => {
  res.set(
    'Content-Security-Policy',
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr'''self' http://* 'unsafe-inline' 'unsafe-eval'' "
  )
  const url1 = "https://activtrack.lk/web/pol"
  const url2 = "https://activtrack.lk/web/pod"
  const pol = req.query.pol || 0
  const pod = req.query.pod || 0

  const polName = req.query.polName
  const podName = req.query.podName

  const getPOL = axios.get(url1)
  const getPOD = axios.get(url2)


  axios.all([getPOL, getPOD]).then(
    axios.spread((...alldata) => {
      const POL = alldata[0].data
      const POD = alldata[1].data
      const select = {
        polName: polName,
        podName: podName
      }
      const data = { POL: POL, POD: POD,  select: select }
      res.render('home', data);
    })
  ).catch((err => {
    res.send(err.message)
    res.render('home', err.message);
  }))
});

router.get('/About-Us', (req, res) => {
  res.set(
    'Content-Security-Policy',
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' http://* 'unsafe-inline' 'unsafe-eval'' "
  )
  res.render('aboutUs');
});

router.get('/Vessel-Schedule', (req, res) => {
  const url1 = "https://activtrack.lk/web/pol"
  const url2 = "https://activtrack.lk/web/pod"
  const pol = req.query.pol || 0
  const pod = req.query.pod || 0

  const polName = req.query.polName || "All"
  const podName = req.query.podName || "All"
  const url3 = `https://activtrack.lk/web/vessel?pol=${pol}&pod=${pod}`

  const getPOL = axios.get(url1)
  const getPOD = axios.get(url2)
  const POLD = axios.get(url3)


  axios.all([getPOL, getPOD, POLD]).then(
    axios.spread((...alldata) => {
      const POL = alldata[0].data
      const POD = alldata[1].data
      const POLD = alldata[2].data
      const select = {
        polName: polName,
        podName: podName
      }
      const data = { POL: POL, POD: POD, all: POLD, select: select }
      res.render('vesselSchedule', data);
      
    })
  ).catch((err => {
    res.send(err.message)
    res.render('vesselSchedule', err.message);
  }))

});


router.get('/Services', (req, res) => {
  res.render('Services');
});


router.get('/FAQ', (req, res) => {
  res.render('FAQ');
});

router.get('/Contact-Us', (req, res) => {
  res.set(
    'Content-Security-Policy',
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' ''self' http://* 'unsafe-inline' 'unsafe-eval'' "
  )
  res.render('contactUs');
});


router.get('/Careers', (req, res) => {
  res.set(
    'Content-Security-Policy',
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';script-src 'attr' ''self' http://* 'unsafe-inline' 'unsafe-eval'' "
  )
  res.render('careers');
});

//terms and conditions
router.get('/Terms', (req, res) => {
  res.render('Terms');
});




// emails
router.get('/contactForm', (req, res) => {
  contactFormclient(req.body.email, req.body.name, req.body.message);
  contactForm(req.body.email, req.body.name, req.body.message);
  res.render('Contact-Us');
});



router.post('/careerForm', (req, res) => {
  res.set(
    'Content-Security-Policy',
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
  )
  careers(req.body.email, req.body.name, req.body.message);
  careersClient(req.body.email, req.body.name, req.body.message);
  res.render('home');

});







export default router;