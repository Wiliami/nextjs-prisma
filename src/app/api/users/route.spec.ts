/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { GET } from './route'; // Adjust the import path as necessary

describe('/api/users route handler', () => {
  it('should return a JSON message with status 200', async () => {
    // Create a mock Request object if needed (e.g., for query parameters, body, headers)
    const mockRequest = new NextRequest('http://localhost/api/users', {
        method: 'GET',

    });

    // Invoke the handler function
    const response = await GET(mockRequest);

    // Assertions
    expect(response.status).toBe(200);
    const jsonResponse = await response.json();
    expect(jsonResponse.message).toBe("Hello, world!");
  });
});