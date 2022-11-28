// Imported modules of core module
import readline from "readline";

// Imported modulse of third-party modules
import valid from "validator";

// Creating an interface of input and output with readline module and process function
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Questions asking on someone's biography
// Inputs are:
// Name
rl.question('What\'s your name? ', (name) => {
    // Email
    rl.question('What\'s your email? ', (email) => {
        // Address
        rl.question('What\'s your number? ', (telp) => {
            // Outputs and validation
            // Name validation
            switch (valid.isAlpha(name)) {
                case false:
                    console.log('Your name contains NOT characters')
                    break;
                default:
                    console.log(`Your name is ${(name)}`);
                    break;
            }
            // Email validation
            switch (valid.isEmail(email)) {
                case false:
                    console.log('Your email format is wrong')
                    break;
                default:
                    console.log(`Your email is ${(email)}`);
                    break;
            }
            // Phone Number validation
            switch (valid.isMobilePhone(telp)) {
                case false:
                    console.log('Your number format is wrong')
                    break;
                default:
                    console.log(`Your number is ${(telp)}`);
                    break;
            }
            // Close the readLine module
            rl.close();
        })
    })
});