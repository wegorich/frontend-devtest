# Frontend Developer Test

Build a ReactJS (preferable) or AngularJS 1.x application ( written in ES6 JavaScript )
which would use:
- Bootstrap 3
- Babel compiler
- Webpack
- SCSS
- HTML5

to deliver required functionality.

## Required functionality

### General requirements

The application should:
- have the usual bootstrap top level menu bar which only displays the name of the user (hardcoded) on the right hand side
- have the secondary menu bar right below the main one which would be used for
 displaying ui dropdowns with links which would allow the user to access required sections
- allow the user to add / edit / view / remove video information record (use cookie storage or the application state store for this)
- allow the user to list all added video info records with snapshot thumbnail images displayed and pagination
- allow the user to click the snapshot thumbnail and see the actual video snapshot

### Video information records

User should be able to create a video information record with the following attributes
 - title
 - video snapshot thumbnail url
 - video snapshot url
 - description

### Tests

Cover the video adding and listing functionality with tests but don't aim for 100% coverage.
Choose important elements which should be covered on your own.

### Technical requirements

The application should:
- use npm packages to gain access to almost all required JS libraries (except boostrap)
- load Bootstrap JS and CSS code outside of babel + webpack pipeline
- load all JS code through babel + webpack pipeline
- load all SCSS code through webpack pipeline


