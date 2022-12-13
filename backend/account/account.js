const analyst = [
  {
    username: "huy123",
    password: "123456",
    role: "analyst",
    id: "100001",
    ssn: "12312523",
    fname: "Huy",
    mname: "Anh",
    lname: "Le",
    bdate: "2002-09-07",
    address: "KTX",
    DB_USERNAME: "root",
    DB_PASSWORD: "1234",
    DB_NAME: "company",
  },
];
const manager = [
  {
    username: "huymanager",
    password: "1234567",
    role: "manager",
    id: "100013",
    ssn: "12312523",
    fname: "Huy",
    mname: "Anh",
    lname: "Le",
    bdate: "2002-09-07",
    address: "KTX",
    DB_USERNAME: "root",
    DB_PASSWORD: "kimngan1704",
    DB_NAME: "manufacturing",
  },
];
const worker = [
  {
    username: "huy123",
    password: "123456",
    role: "worker",
    id: "100005",
    ssn: "12312523",
    fname: "Huy",
    mname: "Anh",
    lname: "Le",
    bdate: "2002-09-07",
    address: "KTX",
    DB_USERNAME: "root",
    DB_PASSWORD: "kimngan1704",
    DB_NAME: "manufacturing",
  },
];
const designer = [
  {
    username: "huy123",
    password: "123456",
    role: "designer",
    id: "100008",
    ssn: "12312523",
    fname: "Huy",
    mname: "Anh",
    lname: "Le",
    bdate: "2002-09-07",
    address: "KTX",
    DB_USERNAME: "root",
    DB_PASSWORD: "kimngan1704",
    DB_NAME: "manufacturing",
  },
];

function getUser(username, password) {
  let result = null;
  analyst.forEach((user) => {
    if (user.username === username && user.password === password) {
      result = user;
    }
  });
  manager.forEach((user) => {
    if (user.username === username && user.password === password) {
      result = user;
    }
  });
  worker.forEach((user) => {
    if (user.username === username && user.password === password) {
      result = user;
    }
  });
  designer.forEach((user) => {
    if (user.username === username && user.password === password) {
      result = user;
    }
  });
  return result;
}

function getRole(username, password) {
  const user = getUser(username, password);
  if (!user) return "nothing";
  return user.role;
}

module.exports = { getRole, getUser };
