var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", 
  },
];

const trustedEmails = [];
const pattern = /^([a-z0-9]+)(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

for (let i = 0; i < arr.length; i++) {
  let e = arr[i].email;
  if (pattern.test(e)) trustedEmails.push(e);
}

console.log(trustedEmails);
