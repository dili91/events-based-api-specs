const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const mandatesLifecycleHandler = require('../handlers/mandates-lifecycle');
module.exports = router;

/**
 * Receive update on REC Payments API events
 */
router.useOutbound('mandates/lifecycle', async (message, next) => {
  try {
    await validateMessage(message.payload,'mandates/lifecycle','RecUpdateEvent','subscribe');
    await mandatesLifecycleHandler.recUpdate({message});
    next();
  } catch (e) {
    next(e);
  }
});
