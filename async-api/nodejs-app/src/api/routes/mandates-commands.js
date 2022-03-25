const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const mandatesCommandsHandler = require('../handlers/mandates-commands');
module.exports = router;

/**
 * Publish a create mandate command
 */
router.use('mandates/commands', async (message, next) => {
  try {
    await validateMessage(message.payload,'mandates/commands','createMandateCommand','publish');
    await mandatesCommandsHandler.createMandate({message});
    next();
  } catch (e) {
    next(e);
  }
});
