import users from '../constants/usersTest.js';

/**
 * Returns the complete list of test users
 * @returns {Array} Array of test user emails
 */
export const getUsers = () => users;

/**
 * Returns a specific user by email if it exists in the test users list
 * @param {string} email - The email to search for
 * @returns {string|null} The found email or null if not found
 */
export const getUserByEmail = (email) => {
  return users.find(user => user === email) || null;
};

/**
 * Filters users by email domain
 * @param {string} domain - The domain to filter by (e.g., 'billed.com')
 * @returns {Array} Filtered list of users with the specified domain
 */
export const filterUsersByDomain = (domain) => {
  return users.filter(user => user.endsWith(`@${domain}`));
};

/**
 * Checks if an email is in the test users list
 * @param {string} email - The email to check
 * @returns {boolean} True if the email is in the list, false otherwise
 */
export const isValidUser = (email) => {
  return users.includes(email);
};

/**
 * Returns a random user from the test users list
 * @returns {string} A random user email
 */
export const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

/**
 * Returns the number of test users
 * @returns {number} The count of test users
 */
export const getUserCount = () => {
  return users.length;
};

