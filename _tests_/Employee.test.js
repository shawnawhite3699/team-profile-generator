const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should return the name passed in", () => {
        //Arrange
        const newEmp = new Employee("Alex", "5", "alex@company.org");
        //Act
        const testName = newEmp.getName();
        //Assert
        expect(testName).toBe("Alex");
    });

    it("should return the ID passed in", () => {
        const newEmp = new Employee("Alex", "5", "alex@company.org");
        const testId = newEmp.getId();
    
        expect(testId).toBe("5");
    });
    
    it("should return the email passed in", () => {
        const newEmp = new Employee("Alex", "5", "alex@company.org");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("alex@company.org");
    });
    
    it("should return the role passed in", () => {
        const newEmp = new Employee("Alex", "5", "alex@company.org");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Employee");
    });
});