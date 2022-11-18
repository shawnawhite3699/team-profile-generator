const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should return the name passed in", () => {
        const newEmp = new Manager("Tony", "1", "tony@company.org", "102");
        const testName = newEmp.getName();

        expect(testName).toBe("Tony");
    });

    it("should return the ID passed in", () => {
        const newEmp = new Manager("Tony", "1", "tony@company.org", "102");
        const testId = newEmp.getId();
    
        expect(testId).toBe("1");
    });
    
    it("should return the email passed in", () => {
        const newEmp = new Manager("Tony", "1", "tony@company.org", "102");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("tony@company.org");
    });
    
    it("should return the office number passed in", () => {
        const newEmp = new Manager("Tony", "1", "tony@company.org", "102");
        const testOfficeNumber = newEmp.getOfficeNumber();
    
        expect(testOfficeNumber).toBe("102");
    });

    it("should return the role passed in", () => {
        const newEmp = new Manager("Tony", "1", "tony@company.org", "102");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Manager");
    });
});