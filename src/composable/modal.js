import axios from "axios";
// http://localhost:300
// https://bicsserver24.netlify.app/api
export const addNewCustomer = async function (customer) {
  try {
    // usee this only when are in localhost
    // let newcustomer = {};
    // await fetch(`http://localhost:300/addNewUser/newUser`, {
    //   credentials: "include",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(customer),
    // }).then((res) => res.json()).then(data => newcustomer = data);
    // return newcustomer;

    if (localStorage.getItem("localCustomers")) {
      const localCustomers1 = JSON.parse(localStorage.getItem("localCustomers"));
      localCustomers1.customers.push(customer);
      localStorage.setItem('localCustomers', JSON.stringify(localCustomers1))
    } else {
      localStorage.setItem('localCustomers', JSON.stringify({ customers: [customer] }))
    }

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
    await fetch(`https://bicsserver24.netlify.app/api/addNewUser/sendVerfnumber`, {
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
    let user;
    if (localStorage.getItem("localCustomers")) {
      const localCustomers1 = JSON.parse(localStorage.getItem("localCustomers"));
      user = localCustomers1.customers.find(customer => String(customer.verfnumber) === verfnumber && customer.email === email);
      if (user) return user;
    }
    // console.log('from data base..');
    await fetch(`https://bicsserver24.netlify.app/api/addNewUser/getUser`, {
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
    await fetch(`https://bicsserver24.netlify.app/api/currentUserInf/getInfo/${id}`, {
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
    await fetch(`https://bicsserver24.netlify.app/api/currentUserInf/customersInf`, {
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
