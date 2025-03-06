/**
 * @jest-environment jsdom
 */

import * as userTestUtils from '../utils/userTestUtils.js';
import users, { getTestUsers } from '../constants/usersTest.js';

describe('User Test Utilities', () => {
  describe('getUsers', () => {
    it('should return all test users', () => {
      const result = userTestUtils.getUsers();
      expect(result).toEqual(users);
      expect(result.length).toBe(4);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should match the expected list of users', () => {
      const expectedUsers = [
        'cedric.hiely@billed.com',
        'christian.saluzzo@billed.com',
        'jean.limbert@billed.com',
        'joanna.binet@billed.com'
      ];
      expect(userTestUtils.getUsers()).toEqual(expectedUsers);
    });
  });

  describe('getUserByEmail', () => {
    it('should return the email if it exists in the list', () => {
      const email = 'cedric.hiely@billed.com';
      expect(userTestUtils.getUserByEmail(email)).toBe(email);
    });

    it('should return null if the email does not exist in the list', () => {
      const email = 'nonexistent@billed.com';
      expect(userTestUtils.getUserByEmail(email)).toBeNull();
    });
  });

  describe('filterUsersByDomain', () => {
    it('should return users filtered by domain', () => {
      const result = userTestUtils.filterUsersByDomain('billed.com');
      expect(result.length).toBe(4);
      result.forEach(user => {
        expect(user).toMatch(/@billed\.com$/);
      });
    });

    it('should return an empty array if no users match the domain', () => {
      const result = userTestUtils.filterUsersByDomain('example.com');
      expect(result.length).toBe(0);
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('isValidUser', () => {
    it('should return true for valid users', () => {
      expect(userTestUtils.isValidUser('cedric.hiely@billed.com')).toBe(true);
      expect(userTestUtils.isValidUser('christian.saluzzo@billed.com')).toBe(true);
    });

    it('should return false for invalid users', () => {
      expect(userTestUtils.isValidUser('invalid@example.com')).toBe(false);
      expect(userTestUtils.isValidUser('')).toBe(false);
    });
  });

  describe('getRandomUser', () => {
    it('should return a user from the list', () => {
      const randomUser = userTestUtils.getRandomUser();
      expect(users).toContain(randomUser);
    });

    it('should return different users on multiple calls (probabilistic test)', () => {
      // This is a probabilistic test that could theoretically fail
      // even with correct implementation, but it's very unlikely
      const results = new Set();
      for (let i = 0; i < 20; i++) {
        results.add(userTestUtils.getRandomUser());
        // If we get at least 2 different results, the test passes
        if (results.size > 1) break;
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('getUserCount', () => {
    it('should return the correct number of users', () => {
      expect(userTestUtils.getUserCount()).toBe(4);
    });

    it('should match the length of the users array', () => {
      expect(userTestUtils.getUserCount()).toBe(users.length);
    });
  });
});

// Tests for the getTestUsers function from usersTest.js
describe('usersTest.js module', () => {
  describe('getTestUsers', () => {
    it('should return the array of test users', () => {
      const result = getTestUsers();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4);
    });

    it('should match the expected test users', () => {
      const expectedUsers = [
        'cedric.hiely@billed.com',
        'christian.saluzzo@billed.com',
        'jean.limbert@billed.com',
        'joanna.binet@billed.com'
      ];
      expect(getTestUsers()).toEqual(expectedUsers);
    });

    it('should return the same array as the default export', () => {
      expect(getTestUsers()).toBe(users);
    });
  });
});
