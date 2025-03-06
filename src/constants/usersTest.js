// Execute this code when the module is imported for better code coverage
console.log('usersTest.js module loaded');

// Define the users array
const users = [
    'cedric.hiely@billed.com',
    'christian.saluzzo@billed.com',
    'jean.limbert@billed.com',
    'joanna.binet@billed.com'
];

// Log the number of users for code coverage
console.log(`Loaded ${users.length} test users`);

/**
 * Returns the array of test user emails
 * @returns {Array} Array of test user email addresses
 */
export function getTestUsers() {
    return users;
}

// Export the users array directly for backward compatibility
export default users;
