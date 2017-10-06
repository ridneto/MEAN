const express = require('express')

module.exports = function(server) {

  // a partir da api
  const router = express.Router()
  server.use('/api', router)

  // rotas
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
