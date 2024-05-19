import { deleteSleepRecord } from "../../controllers/sleepController.js";
import fs from "fs";
import { jest } from "@jest/globals";

// Mocking the response object
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe("Delete sleep record", () => {
    it("should return 404 if record does not exist", async () => {
        // Mocking the request object with a recordId for a non-existing record
        const mockRequest = {
            params: { recordId: 'nonExistingRecordId' }
        };

        const res = mockResponse();

        // Mocking sleep data with an empty array (no records)
        jest.spyOn(fs.promises, 'readFile').mockResolvedValueOnce(JSON.stringify([])); // Mocking fs.promises.readFile

        // Call the deleteSleepRecord function with mocked request and response objects
        await deleteSleepRecord(mockRequest, res);

        // Expecting the response status to be set to 404
        expect(res.status).toHaveBeenCalledWith(404);

        // Expecting the response json to contain the error message
        expect(res.json).toHaveBeenCalledWith({ message: 'Record not found' });
    });
});
