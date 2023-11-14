import express = require('express');

const router = express.Router();

/**
 * Check server health
 */
router.get('/check-server', (req: express.Request, res: express.Response) => {
  res.json({
    data: "OK"
  });
});

export = router;