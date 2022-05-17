# notes on development process and project structure

#### At first I noticed the massive BIN file and though I needed to optimize for time to query it.

#### As I began figuring out how to load it I realized there were duplicates so I ran a bash 'sort -u' to remove

#### duplicates. Next, I had originally planned to do a data pull for BIN data from the lookup library API

#### however, they rate limit heavily so I had to do something which would maintain state. I scraped the BIN

#### data into a csv, then made it into a JSON file, which loads into 'main.js' upon start of API.

#### I used simple javascript filters for all the Filter methods.

#### I used Docker only, instead of Docker compose so the user would not have to install docker compose if they

#### don't want it.
