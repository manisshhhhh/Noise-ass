import { addSleepRecord } from "../../controllers/sleepController.js";

// Mocking the response object
const mockResponse = {
    status: jest.fn(() => mockResponse), // Mock status method to return the same object
    json: jest.fn() // Mock json method
};

// Test case
describe("Add sleep record", () => {
    it("should return 201 and the new record if all fields are provided", async () => {
        // Mocking the request object with userId and hours
        const mockRequest = {
            body: { userId: 'user1', hours: 8 }
        };

        // Mock writeSleepData function
        const writeSleepData = jest.fn();

        // Calling the addSleepRecord function with the mocked request and response objects
        await addSleepRecord(mockRequest, mockResponse);

        // Expecting the response status to be set to 201
        expect(mockResponse.status).toHaveBeenCalledWith(201);

        // Expecting the json method to be called with the new record
        expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
            id: expect.any(String),
            userId: 'user1',
            hours: 8,
            timestamp: expect.any(String)
        }));
    });
});
