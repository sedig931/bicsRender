export const addNewCustomer = async function (customer) {
  try {
    await fetch(`http://localhost:300/addNewUser/newUser`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: customer,
    });
  } catch (err) {
    throw err;
  }
};
export const addNewAdmin = async function (admin) {
  try {
    await fetch(`http://localhost:300/addNewUser/newAdmin`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
  } catch (err) {
    throw err;
  }
};

export const sendVerfNum = async function (receverInfo) {
  try {
    await fetch(`http://localhost:300/addNewUser/sendVerfnumber`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receverInfo),
    });
  } catch (err) {
    throw err;
  }
};

export const getUserInfo = async function (email, verfnumber) {
  try {
    let user = {};
    await fetch(`http://localhost:300/addNewUser/getUser`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: verfnumber }),
    })
      .then((res) => res.json())
      .then((data) => (user = data));
    return user;
  } catch (err) {
    throw err;
  }
};

export const getCurrentUser = async function (id) {
  try {
    let user = {};
    await fetch(`http://localhost:300/currentUserInf/getInfo/${id}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (user = data));
    return user;
  } catch (err) {
    throw err;
  }
};

export const getAllCustomers = async function () {
  try {
    let allcustomer;
    await fetch(`http://localhost:300/currentUserInf/customersInf`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (allcustomer = data));
    return allcustomer;
  } catch (err) {
    throw err;
  }
};
