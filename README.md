# HRANITAASSIGNMENT

This project is created to complete the assignmnt given by Heartland Retails.

Following Technologies has been used in the project:
Nodejs, TypeScript, Cucumber and WebDriver.io

The project configuration can be controlled via file
wdio.config.ts

In this project we have following files:
1. shop.featre - this is the feature file which contains the specs in the Gherkin language
2. shop.ts - this is the step  definition which has the definition of all the steps.
3. Page Classes - shop.page.ts. product.page.ts and checkout.page.ts - these page classes contains relevant page objects and methods with the detailed implementation.
4. The project has all the assertions available in the shop.ts file.


To initialize the node project
  npm init -y
  
To Install wdio   
  npm install @wdio/cli
  
To configure wdio Project
  npx wdio config
  
Run the Project
  npm run wdio
