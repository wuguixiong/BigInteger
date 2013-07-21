describe("add of Big Integer", function () {
    it("simple add", function () {
        expect(BigInteger.add("1", "2")).toBe("3");
        expect(BigInteger.add("5", "5")).toBe("10");
        expect(BigInteger.add("7", "8")).toBe("15");
        expect(BigInteger.add("67", "88")).toBe("155");
    });

    it("complex add", function () {
        expect(BigInteger.add("89897973298", "23202")).toBe("89897996500");
        expect(BigInteger.add("4534534634", "463462980809")).toBe("467997515443");
        expect(BigInteger.add("68345395434", "34534534")).toBe("68379929968");
    });

    it("negative add", function () {
        expect(BigInteger.add("-1", "1")).toBe("0");
        expect(BigInteger.add("-10", "-20")).toBe("-30");
        expect(BigInteger.add("4", "-3")).toBe("1");
        expect(BigInteger.add("4", "-5")).toBe("-1");
    });

});

describe("subtract of Big Integer", function () {
    it("simple subtract", function () {
        expect(BigInteger.subtract("2", "3")).toBe("-1");
        expect(BigInteger.subtract("3", "2")).toBe("1");
        expect(BigInteger.subtract("10", "5")).toBe("5");
        expect(BigInteger.subtract("15", "8")).toBe("7");
        expect(BigInteger.subtract("155", "88")).toBe("67");
        expect(BigInteger.subtract("50", "50")).toBe("0");
    });

    it("complex subtract", function () {
        expect(BigInteger.subtract("89897996500", "23202")).toBe("89897973298");
        expect(BigInteger.subtract("467997515443", "463462980809")).toBe("4534534634");
        expect(BigInteger.subtract("68379929968", "34534534")).toBe("68345395434");
    });

    it("negative subtract", function () {
        expect(BigInteger.subtract("-10", "-30")).toBe("20");
        expect(BigInteger.subtract("40", "50")).toBe("-10");
        expect(BigInteger.subtract("-40", "50")).toBe("-90");
        expect(BigInteger.subtract("40", "-50")).toBe("90");
    });
});

describe("BigInteger.multiply of Big Integer", function () {
    it("simple BigInteger.multiply", function () {
        expect(BigInteger.multiply("2", "3")).toBe("6");
        expect(BigInteger.multiply("5", "0")).toBe("0");
        expect(BigInteger.multiply("15", "8")).toBe("120");
    });

    it("complex BigInteger.multiply", function () {
        expect(BigInteger.multiply("4534534", "45645")).toBe("206978804430");
        expect(BigInteger.multiply("56756", "754453453")).toBe("42819760178468");
        expect(BigInteger.multiply("34517297", "35645")).toBe("1230369051565");
    });

    it("negative BigInteger.multiply", function () {
        expect(BigInteger.multiply("-2", "3")).toBe("-6");
        expect(BigInteger.multiply("-5", "-5")).toBe("25");
        expect(BigInteger.multiply("4", "-5")).toBe("-20");
        expect(BigInteger.multiply("0", "-5")).toBe("0");
    });

});


describe("BigInteger.device of Big Integer", function () {
    it("simple BigInteger.device", function () {
        expect(BigInteger.device("6", "3")).toBe("2");
        expect(BigInteger.device("0", "5")).toBe("0");
        expect(BigInteger.device("120", "8")).toBe("15");
    });

    it("complex BigInteger.device", function () {
        expect(BigInteger.device("206978804430", "45645")).toBe("4534534");
        expect(BigInteger.device("42819760178468", "754453453")).toBe("56756");
        expect(BigInteger.device("1230369051565", "35645")).toBe("34517297");
    });

    it("negative BigInteger.device", function () {
        expect(BigInteger.device("-6", "3")).toBe("-2");
        expect(BigInteger.device("25", "-5")).toBe("-5");
        expect(BigInteger.device("-20", "-5")).toBe("4");
        expect(BigInteger.device("0", "-5")).toBe("0");
    });
});