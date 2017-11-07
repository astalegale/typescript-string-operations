import { TestBed, inject } from '@angular/core/testing';
import { expect } from 'chai';
import { String } from './typescript-string-operations';


describe('JwtHelperService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [JwtHelperService]
        });
    });

    it('should be created', inject([JwtHelperService], (service: JwtHelperService) => {
        expect(service).toBeTruthy();
    }));
});


describe('String.IsNullOrWhitespace', () => {

    it('should return true on null string', () => {
        let teststring = null;
        let result = String.IsNullOrWhiteSpace(teststring);
        expect(result).to.equal(true);
    });

    it('should return true on empty string', () => {
        let teststring = '';
        let result = String.IsNullOrWhiteSpace(teststring);
        expect(result).to.equal(true);
    });

    it('should return true only whitespace', () => {
        let teststring = '    ';
        let result = String.IsNullOrWhiteSpace(teststring);
        expect(result).to.equal(true);
    });

    it('should return false contains non-whitespace characters', () => {
        let teststring = '  s  ';
        let result = String.IsNullOrWhiteSpace(teststring);
        expect(result).to.equal(false);
    });
});

describe('String.Format', () => {
    describe('Placeholders', () => {
        it('should format the string correct', () => {
            let template = "{0}";
            let valueToInsert = "Foo";
            let result = String.Format(template, valueToInsert);
            expect(result).to.equal(valueToInsert);
        });

        it('should format the string correct multiple times', () => {
            let template = "{0}Bar{0}";
            let valueToInsert = "Foo";
            let expectedValue = "FooBarFoo";
            let result = String.Format(template, valueToInsert);
            expect(result).to.equal(expectedValue);
        });

        it('should format the string correct multiple values', () => {
            let template = "{0}Bar{1}";
            let valueToInsert = "Foo";
            let secondValueToInsert = "Baz";
            let expectedValue = "FooBarBaz";
            let result = String.Format(template, valueToInsert, secondValueToInsert);
            expect(result).to.equal(expectedValue);
        });
    });
    describe('formating', () => {
        describe('dates', () => {
            it('should set the correct display date using Date', () => {
                let template = "{0:d}";
                let valueToInsert = new Date(2017, 4, 13);

                let expectedValue = "13.04.2017";
                let result = String.Format(template, valueToInsert);
                expect(result).to.equal(expectedValue);
            });

            it('should set the correct sortable date using Date', () => {
                let template = "{0:s}";
                let valueToInsert = new Date(2017, 4, 13);

                let expectedValue = "2017-04-13";
                let result = String.Format(template, valueToInsert);
                expect(result).to.equal(expectedValue);
            });

            it('should set the correct display date using string', () => {
                let template = "{0:d}";
                let valueToInsert = '2017-01-23 00:00';

                let expectedValue = "23.01.2017";
                let result = String.Format(template, valueToInsert);
                expect(result).to.equal(expectedValue);
            });

            it('should set the correct sortable date using string', () => {
                let template = "{0:s}";
                let valueToInsert = '21.03.2017 22:15:01';

                let expectedValue = "2017-03-21T22:15:01";
                let result = String.Format(template, valueToInsert);
                expect(result).to.equal(expectedValue);
            });
        });

        describe('uppercasing', () => {
            it('should return the string as uppercase', () => {
                let expectedValue = 'AWESOME';
                let template = '{0:U}';
                let valueToInsert = 'awesome';

                let actual = String.Format(template, valueToInsert);

                expect(actual).to.equal(expectedValue);
            });

            it('should return the string as lowercase', () => {
                let expectedValue = 'awesome';
                let template = '{0:L}';
                let valueToInsert = 'AWESOME';

                let actual = String.Format(template, valueToInsert);

                expect(actual).to.equal(expectedValue);
            });
        });

        describe('numbers', () => {
            it('should pad 5 to 05 using {0:00}', () => {
                let template = '{0:00}';
                let result = String.Format(template, 5);
                expect(result).to.equal('05');
            });

            it('should pad 5 to 005 using {0:000}', () => {
                let template = '{0:000}';
                let result = String.Format(template, 5);
                expect(result).to.equal('005');
            });

            it('should set the correct thousands seperator', () => {
                let template = '{0:n}';
                let valueToInsert = '10000000000';
                let expectedValue = '10.000.000.000';

                let result = String.Format(template, valueToInsert);

                expect(result).to.equal(expectedValue);
            });
            it('should set the correct thousands seperator keeping the decimals', () => {
                let template = '{0:n}';
                let valueToInsert = '10000000000,12345';
                let expectedValue = '10.000.000.000,12345';

                let result = String.Format(template, valueToInsert);

                expect(result).to.equal(expectedValue);
            });
        });
    });

});

describe('String.Join', () => {
    it('should join the given strings passed as args', () => {
        let stringOne = "red", stringTwo = "yellow", stringThree = "blue";

        let result = String.Join('; ', stringOne, stringTwo, stringThree);

        expect(result).to.equal("red; yellow; blue");
    });

    it('should join the given array', () => {
        let object = ["red", "yellow", "blue"];
        let result = String.Join('; ', object);
        expect(result).to.equal("red; yellow; blue");
    });

    it('should join the given object', () => {
        let object = { Name: "Foo", Value: "Bar" };

        let result = String.Join('.', object);

        expect(result).to.equal("Foo.Bar");
    });
});