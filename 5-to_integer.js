let argv = process.argv[2]

if(argv == null || isNaN(argv)) {
    console.log("Not a number");
} else {
    console.log("My number: " + Math.floor(argv));
}