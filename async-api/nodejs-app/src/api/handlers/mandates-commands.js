
const handler = module.exports = {};

/**
 * Publish a create mandate command
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.id - the id of the mandate
 * @param {integer} options.message.payload.amount - the amount of the mandate
 */
handler.createMandate = async ({message}) => {
  // Implement your business logic here...
};
