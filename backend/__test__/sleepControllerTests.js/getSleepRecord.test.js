import { getSleepRecords } from "../../controllers/sleepController";

// Mocking the response object
const mockResponse = {
    status: jest.fn(),
    json: jest.fn(),
};

// Test case
describe("Get sleep record", () => {
    it("should return 404 if no sleep records found for the userId", async () => {
        // Mocking the request object with a userId for which no records exist
        const mockRequest = {
            params: { userId: 'nonexistentUser' }
        };

        // Expecting getSleepRecords to throw an error
        await expect(getSleepRecords(mockRequest, mockResponse)).rejects.toThrowError('No sleep records found for the nonexistentUser');

        // Expecting the response status to be set to 404
        expect(mockResponse.status).toHaveBeenCalledWith(404);
    });
});
