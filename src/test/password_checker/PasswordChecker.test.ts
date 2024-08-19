import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/password_checker/PasswordChecker";

describe("Password Checker Test Suite", () => {
  let passwordChecker;

  beforeEach(() => {
    passwordChecker = new PasswordChecker();
  });

  it("should reject password with less than 8 characters", () => {
    const result = passwordChecker.checkPassword("1234567");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.SHORT);
  });

  it("should accept password with 8 characters as valid", () => {
    const result = passwordChecker.checkPassword("12345678aB");
    expect(result.valid).toBe(true);
    expect(result.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("should reject password with no upper case characters as invalid", () => {
    const result = passwordChecker.checkPassword("1234abcd");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("should accept password with upper case characters as valid", () => {
    const result = passwordChecker.checkPassword("1234abcdA");
    expect(result.valid).toBe(true);
    expect(result.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("should reject password with no lower case characters as invalid", () => {
    const result = passwordChecker.checkPassword("1234ABCD");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("should accept password with lower case characters as valid", () => {
    const result = passwordChecker.checkPassword("1234ABCDb");
    expect(result.valid).toBe(true);
    expect(result.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("should accept complex password as valid", () => {
    const result = passwordChecker.checkPassword("1234ABCDb");
    expect(result.valid).toBe(true);
    expect(result.reasons).toHaveLength(0);
  });

  it("should reject admin password with no number as invalid", () => {
    const result = passwordChecker.checkAdminPassword("ABCDb");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("should accept admin password no number as valid", () => {
    const result = passwordChecker.checkAdminPassword("1234ABCDb");
    expect(result.valid).toBe(true);
    expect(result.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
