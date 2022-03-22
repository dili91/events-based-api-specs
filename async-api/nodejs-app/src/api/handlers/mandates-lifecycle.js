
const handler = module.exports = {};

/**
 * Receive update on REC Payments API events
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.id - Id of the mandate to create
 * @param {string} options.message.payload.status - status of the resource
 */
handler.recUpdate = async ({message}) => {
  // Implement your business logic here...
};
