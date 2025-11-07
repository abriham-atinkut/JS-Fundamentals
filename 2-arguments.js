let arg = process.argv.length;
let argv_2 = process.argv[2];
const expected = 3;
    if (argv_2 == null) {
      console.log("No argument");
    } else if (arg === expected) {
      console.log("Argument found");
    } else {
      console.log("Arguments found");
    }


