const name = "Peter Heronimous Lind"; // Test name string

// Find the position of the first and last spaces
const firstSpaceIndex = name.indexOf(" ");
const lastSpaceIndex = name.lastIndexOf(" ");

// Extract the first name (from start to first space)
const firstName = name.substring(0, firstSpaceIndex);

// Extract the last name (from the last space to the end of the string)
const lastName = name.substring(lastSpaceIndex + 1);

// Extract the middle name (from first space to last space)
const middleName = name.substring(firstSpaceIndex + 1, lastSpaceIndex);

// Output the results
console.log("First Name:", firstName);
console.log("Middle Name:", middleName);
console.log("Last Name:", lastName);