
const handler = module.exports = {};

/**
 * Receive a mandate created event
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.id - the id of the mandate
 * @param {string} options.message.payload.status - Status description
 * @param {string} options.message.payload.createdAt
 */
handler.mandateCreated = async ({message}) => {
  // Implement your business logic here...
};
