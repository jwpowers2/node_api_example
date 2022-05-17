# fullstack_mchallege_1

## Instructions

- APPENDED- directions are to keep this local, git local, no remote, then re-package and return to Wes at flexgen
- Clone this repository to your local.
- Create a new git branch labeled: "FG*FullStack*{first*name}*{last_name}"
- Solve the challenge below first and then commit+push the code for your solution implementation to the aforementioned git branch.
- You will be contacted after verification of challenge completion.
- Go above and beyond for demonstrating understanding of our technical stack and to cut in line in our interview scheduling.

# Challenge

<details><summary>Click to Show Challenge Details</summary>

A Bank Identification Number, or BIN, works to protect both merchants and consumers in the online marketplace.

Every credit or debit card contains a BIN, typically the first four to six numbers on a bank-issued card.

These numbers easily identify the type of card being used, the geographic location of the card issuer and which bank or company issued the card.

BINs are also referred to as IIN (Issuer Identification Number), since not all cards are issued by banks. Institutions such as American Express issue cards that incorporate BIN data as well as many prepaid and virtual gift cards like PayPal, Walmart and netSpend.

---

- Problem of the day

---

We have a collection of BIN numbers stored in "bins.csv". There have been fraudulent activity on our cash app platform especially with people in South Africa using cards from different countries and different continents on our cash app.

1. Lets have a function that uses the BIN collection data to figure out which card bins are from banks in these African countries we support(Ghana, South Africa, Nigeria, Uganda, Rwanda, Kenya, Tanzania), group them and store them in an object or map datatype and return that as an output.

2) Lets have a function to group the card BINs from the BINs collection data, based on whether the card type is CREDIT or DEBIT. Your output should be in this format eg. { CREDIT: [], DEBIT: [] }

3. We should enforce that only cards from a particular country can be used. Lets create a function that takes in country code and the BIN, returns a boolean output to confirm if the card was issued in that country. eg. isCardIssuedInCountry('Ghana', 5111456) => false

Tips: We can use npm library called "binlookup" to help us get all the information we need to know about a card using their BIN number. Also feel free to use any CSV parser library you know.

</details>

# Going Above and Beyond

<details><summary>Click to Show Above and Beyond Details</summary>

1. We like to diagram and communicate our software architecture using the C4 standard.

- <https://c4model.com/>

2. We like to test our backend code using Mocha.

- <https://mochajs.org/>

3. We like to report on our testing utilizing an IstanbulJS report.

- <https://istanbul.js.org/>

4. We like to document our code utilizing JSDocs and Directory-Tree.

- <https://jsdoc.app/>
- <https://www.npmjs.com/package/directory-tree>

5. We like to procedurally generate our diagrams when we're able, below are a couple different options.

- <https://github.com/mermaid-js/mermaid>
- <https://github.com/structurizr/dsl>

6. We do not expect you to know TypeScript at this level, or for this challenge, but if you want to make us go "wow" we do utilize it as our superset on new engineering.

- <https://www.typescriptlang.org/>

</details>
