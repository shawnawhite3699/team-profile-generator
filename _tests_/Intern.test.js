const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should return the name passed in", () => {
        const newEmp = new Intern("Belle", "4", "belle@company.org", "University of Texas");
        const testName = newEmp.getName();

        expect(testName).toBe("Belle");
    });

    it("should return the ID passed in", () => {
        const newEmp = new Intern("Belle", "4", "belle@company.org", "University of Texas");
        const testId = newEmp.getId();
    
        expect(testId).toBe("4");
    });
    
    it("should return the email passed in", () => {
        const newEmp = new Intern("Belle", "4", "belle@company.org", "University of Texas");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("belle@company.org");
    });
    
    it("should return the name of the school passed in", () => {
        const newEmp = new Intern("Belle", "4", "belle@company.org", "University of Texas");
        const testSchool = newEmp.getSchool();
    
        expect(testSchool).toBe("University of Texas");
    });

    it("should return the role passed in", () => {
        const newEmp = new Intern("Belle", "4", "belle@company.org", "University of Texas");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Intern");
    });
});