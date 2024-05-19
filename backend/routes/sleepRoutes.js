import express from 'express';
import { addSleepRecord, getSleepRecords, deleteSleepRecord } from '../controllers/sleepController.js';

const router = express.Router();

router.post('/', addSleepRecord);
router.get('/:userId', getSleepRecords);
router.delete('/:recordId', deleteSleepRecord);

export default router;
