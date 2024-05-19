import asyncHandler from 'express-async-handler';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

// Get the directory path of the current module
const __dirname = path.resolve();

// Construct the absolute path to sleepData.json
const sleepDataFilePath = path.join(__dirname, 'backend', 'data', 'sleepData.json');

// Function to read sleep data from the JSON file
const readSleepData = async () => {
    try {
        const data = await fs.promises.readFile(sleepDataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Function to write sleep data to the JSON file
const writeSleepData = async (data) => {
    try {
        await fs.promises.writeFile(sleepDataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing sleep data:', error);
    }
};


// @desc    Add sleep record
// @route   POST /api/sleep
// @access  Public
const addSleepRecord = asyncHandler(async (req, res) => {
    const { userId, hours } = req.body;

    if (!userId || !hours) {
        res.status(400);
        throw new Error('Please add all the fields');
    }

    const newRecord = {
        id: uuidv4(),
        userId,
        hours,
        timestamp: new Date().toISOString()
    };

    const sleepData = await readSleepData();
    sleepData.push(newRecord);
    await writeSleepData(sleepData);

    res.status(201).json(newRecord);
});

// @desc    Get sleep records
// @route   GET /api/sleep/:userId
// @access  Public
const getSleepRecords = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const sleepData = await readSleepData();
    const records = sleepData.filter(record => record.userId === userId);

    if (records.length === 0) {
        res.status(404);
        throw new Error(`No sleep records found for the ${userId}`);
    }

    records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.status(200).json(records);
});

// @desc    Delete sleep record
// @route   DELETE /api/sleep/:recordId
// @access  Public
const deleteSleepRecord = asyncHandler(async (req, res) => {
    const { recordId } = req.params;

    const sleepData = await readSleepData();
    const index = sleepData.findIndex(record => record.id === recordId);

    if (index === -1) {
        return res.status(404).json({ message: 'Record not found' });
    }

    sleepData.splice(index, 1);
    await writeSleepData(sleepData);

    res.status(204).json({ id: recordId });
});

export { addSleepRecord, getSleepRecords, deleteSleepRecord };