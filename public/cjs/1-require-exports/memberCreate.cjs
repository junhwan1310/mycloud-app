const memberDataSerivce = require('./memberDataService.cjs')

function createMember(name, email, address){
  const member = {name:name, email:email, address:address}
  memberDataSerivce.sendMail(member)
  return member
}

module.exports = { createMember }