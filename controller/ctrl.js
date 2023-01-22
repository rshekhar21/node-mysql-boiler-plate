const modal=require('../modal/modal');
const log=console.log;

async function action(req, res, modal) {
  try {
    let rs=await modal(req)
    let result={ status: 'ok', data: rs }; //log('result',result)
    res.json(result)
  } catch (error) {
    error.status='error'; //log('from contronner action','error',error)
    res.json({ error, msg: error, mesage: error })
  }
}

module.exports={
  log
}