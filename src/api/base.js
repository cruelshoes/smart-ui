import express from 'express';
let router = new express.Router();

router.get("/", (req, res) => {
	res.send('samrt-ui App');
});

export default router;