let arg = process.argv.length;
const expected = 3;
    if (arg == null) {
      console.log("No argument");
    } else if (arg === expected) {
      console.log("Argument found");
    } else {
      console.log("Arguments found");
    }


