# Track-Finder-App

![license badge](https://img.shields.io/badge/license-MIT-brightgreen)
<img src="https://bulma.io/images/made-with-bulma.png" alt="bulma badge" width="100" height="21">

< APP SCREENSHOT GOES HERE!!! >

Fullstack web app that allows runners to locate, look up availability, edit, add, and delete running tracks in their city. Tech stack includes: HTML, CSS, JS, Jquery, Bulma CDN, Node.js, Express, Sequelize and Express Handlebars for ORM/MVC, MySQL dB, and Heroku (for cloud hosting).
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#test)
- [Questions](#questions)
    
## Installation
    
1. Fork and then clone the gitHub repo to your local machine: https://github.com/204039643/Track-Finder-App
2. Ensure you have node.js installed locally.
3. Ensure you have MySQL installed locally and new dB instantiated. Using your favorite MySQL UI or the CLI, create a new local dB called 'tracks-db' and use it. Update the config.json lines 3-6 to match your new dB username, password, database (name), and host (address).
4. Navigate to the app folder and the run 'NPM INSTALL' in the CLI and ensure the following NPM packages install properly as defined in package.json:
express: ^4.17.1
express-handlebars: ^5.2.0
handlebars: ^4.7.6
mysql2: ^2.2.5
sequelize: ^6.3.5
5.  In the CLI, type 'NPM start' to start node app. A new data table called 'tracks' will be created by the MVC. In your MySQL UI, use the db>seeds.sql file to seed the new tracks table with initial data.
    
## Usage

Local
1. Ensure app is running by using 'NPM START' in the CLI.
2. Open http://localhost:8080 in your browser.
3. See 'continued' section below.

Cloud (Heroku)
1. Open URL in your browser: https://polar-castle-76740.herokuapp.com/
2. See 'continued' section below.

Continued
1. You should be on the home page, enter a city to search in order to find records for running tracks or click '+' button to add a track to the dB (see step 5).
2. Should be re-directed to 'All Tracks' page with a data table displaying search results.
3. Using buttons under the 'action' column, you can either:
    a. Edit an existing track > redirect to 'update track' view.
    b. Delete a track > remove track from dB and refresh page.
    c. Get directions to a track > open a new tab in the browser with Google maps centered on track address.
4. Update track view > select track type and/or update track availability details and click 'save' button to update track in dB, will redirect to 'All Tracks' view.
5. Add a track view > All user to the add the following attributes for a new track to be stored in the dB:
    a. name
    b. type (standard or non-standard)
    c. city
    d. state
    e. zip code
    f. availability details
    
## License
    
MIT
    
Copyright (c) [2020] Justin Sykes, Claude Hyppolite, Beth Presten, Bambo Adeshiyan
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    
## Contributions

- Jquery (jquery.com)    
- MySQL server and MySQL server workbench: (https://www.mysql.com/)
- NPM packages: MySQL2 (https://www.npmjs.com/package/mysql2), express (https://www.npmjs.com/package/express), handlebars (https://www.npmjs.com/package/express-handlebars), express handlebars (https://www.npmjs.com/package/express-handlebars), sequelize (https://www.npmjs.com/package/sequelize)
- Bulma CDN (Bulma.io)
- Google maps (https://www.google.com/maps/place/...)
- Heroku (www.heroku.com)

## Tests
    
None
    
## Questions?
Please reach out to us at either of the following:
GitHub usernames: 204039643, chyppoliejr, bethpresten, badeshiyan
Emails: atlsykes1@att.net, claudehyppolite@gmail.com, bpresten@gmail.com, badeshiyan@gmail.com
    
 ---This README was generated using nice-readme-generator :-) ---