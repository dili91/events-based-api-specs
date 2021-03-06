const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const mandatesLifecycleHandler = require('../handlers/mandates-lifecycle');
module.exports = router;

/**
 * Receive a mandate created event
 */
router.useOutbound('mandates/lifecycle', async (message, next) => {
  try {
    await validateMessage(message.payload,'mandates/lifecycle','mandateCreated','subscribe');
    await mandatesLifecycleHandler.mandateCreated({message});
    next();
  } catch (e) {
    next(e);
  }
});
