const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("should return the name passed in", () => {
        const newEmp = new Engineer("Will", "2", "will@company.org", "willco");
        const testName = newEmp.getName();

        expect(testName).toBe("Will");
    });

    it("should return the ID passed in", () => {
        const newEmp = new Engineer("Will", "2", "will@company.org", "willco");
        const testId = newEmp.getId();
    
        expect(testId).toBe("2");
    });
    
    it("should return the email passed in", () => {
        const newEmp = new Engineer("Will", "2", "will@company.org", "willco");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("will@company.org");
    });

    it("should return the github username passed in", () => {
        const newEmp = new Engineer("Will", "2", "will@company.org", "willco");
        const testGithub = newEmp.getGithub();

        expect(testGithub).toBe("willco");
    });
    
    it("should return the role passed in", () => {
        const newEmp = new Engineer("Will", "2", "will@company.org", "willco");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Engineer");
    });
});