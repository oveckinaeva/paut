// Define a type for user names
type UserName = "Riyad" | "Jobayer" | "Sadik" | "Al-amin";

// Function to greet the user
function greetUser(userName: UserName): string {
  return `Hello, ${userName}!`;
}

// Example usage
const userName: UserName = "Riyad";
console.log(greetUser(userName));
