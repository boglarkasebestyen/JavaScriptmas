/* Domain Type

https://scrimba.com/scrim/co551401a8299ce164324fa70

DESCRIPTION:
GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes
directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from
available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to
implement this feature. To begin with, you want to write a function that labels the domains as "commercial", "organization",
"network", or "information" for .com, .org, .net or .info. respectively. For the given list of domains, return the list of their labels.

Example:

For domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"], the output should be domainType(domains) = ["organization", 
"commercial", "network", "information"]

Hints: split(), push()
*/

function domainType(domains) {
    let result = []
    const domainMap = {
        "org" : "organization",
        "com" : "commercial",
        "net" : "network", 
        "info" : "information"
    }
    
    for (let i=0; i< domains.length; i++) {
        const splitDomain = domains[i].split(".")
        const lastElement = splitDomain[splitDomain.length-1]
        result[i] = domainMap[lastElement]
        // console.log(result)
        // result.push(domainMap[lastElement])
    }
    return result
}

/*or:

function domainType(domains) {
    let result = []
    const org = "organization"
    const com = "commercial"
    const net = "network"
    const info = "information"
    
    for (let i=0; i< domains.length; i++) {
        const domain = domains[i]
        const splitDomain = domain.split(".")
        const lastElement = splitDomain[splitDomain.length-1]
        
        if (lastElement.includes("org")) {
            result.push(org) 
        } else if (lastElement.includes("com")) {
            result.push(com) 
        } else if (lastElement.includes("net")) {
            result.push(net) 
        } else if (lastElement.includes("info")) {
            result.push(info) 
        }
    }
    return result
}

or:

function domainType(domains) {
    let result = []
    let org = "organization"
    let com = "commercial"
    let net = "network"
    let info = "information"
    
    for (let i=0; i< domains.length; i++) {
        let domain = domains[i]
        if (domain.includes("org")) {
            result.push(org) 
        } else if (domain.includes("com")) {
            result.push(com) 
        } else if (domain.includes("net")) {
            result.push(net) 
        } else if (domain.includes("info")) {
            result.push(info) 
        }
    }
    return result
}


/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});