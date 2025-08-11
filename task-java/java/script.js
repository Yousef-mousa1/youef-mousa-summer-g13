var users = [];
function addUser() {
    var id = prompt("Enter user ID:");
    var name = prompt("Enter user name:");
    var balance = prompt("Enter user balance:");
    var user = {
        id: id,
        name: name,
        balance: balance
    };
    users.push(user);
    console.log("User added:", user);
}
function editUserBalance() {
    var id = prompt("Enter user ID:");
    var newBalance = prompt("Enter new balance:");
    var index = users.findIndex(function(ele) {
        return ele.id === id;
    });
    if (index !== -1) {
        users[index].balance = newBalance;
        console.log("Balance updated:", users[index]);
    } else {
        console.log("User not found");
    }
}
function deleteUser() {
    var id = prompt("Enter user ID to delete:");
    var index = users.findIndex(function(ele) {
        return ele.id === id;
    });
    if (index !== -1) {
        users.splice(index, 1);
        console.log("User deleted");
    } else {
        console.log("User not found");
    }
}
addUser();
addUser();
addUser();

editUserBalance();
deleteUser();

console.log("Final", users);
