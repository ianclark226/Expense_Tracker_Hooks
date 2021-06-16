// @description Get all transactions
// @route GET /api/v1/transactions
//@access

exports.getTransactions = (req, res, next) => {
    res.send('GET traansactons')
} 

// @description Add transactions
// @route POST /api/v1/transactions
//@access

exports.addTransactions = (req, res, next) => {
    res.send('POST traansactons')
} 

// @description Delete all transactions
// @route DELETE /api/v1/transactions/:id
//@access

exports.delete = (req, res, next) => {
    res.send('DELETE traansactons')
} 