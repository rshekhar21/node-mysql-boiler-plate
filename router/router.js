const ctrl=require('../controller/ctrl');
const express=require('express');
const router=express.Router();
module.exports=router;

router.get('/', (req, res) => {
  res.send('ok');
})