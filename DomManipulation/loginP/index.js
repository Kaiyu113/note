const Container = document.getElementById("Container");

const normalCharacter = /^\w+$/;
const lowerCase = /^[A-Z]+$/;
const upperCase = /^[a-z]+$/;
const number = /^\d+$/;
const userNameReg = /^\w{4,8}$/;

function checkLevel(input, tagName, p) {
  if (input) {
    switch (tagName) {
      case "password":
        if (!normalCharacter.test(input)) {
          p.innerText = "have special character";
          p.style.color = "green";
        } else if (
          lowerCase.test(input) ||
          upperCase.test(input) ||
          number.test(input)
        ) {
          p.innerText = "low security";
          p.style.color = "red";
        } else {
          p.innerText = "middium security";
          p.style.color = "yellow";
        }
        const matchP = document.getElementById("repasswordp");
        if (input === repassword.children[1].value) {
          console.log("match");
          console.log(matchP);
          matchP.innerText = "password Match";
          matchP.style.color = "green";
        } else {
          matchP.innerText = "not Match";
          matchP.style.color = "red";
        }
        break;
      case "repassword":
        if (
          input === password.children[1].value &&
          password.children[1].value
        ) {
          p.innerText = "password Match";
          p.style.color = "green";
        } else {
          p.innerText = "not Match";
          p.style.color = "red";
        }
        break;
      default:
        if (userNameReg.test(input)) {
          p.innerText = "good username";
          p.style.color = "green";
        } else {
          p.innerText = "username should between 4-8";
          p.style.color = "red";
        }
    }
  } else {
    p.innerText = "";
  }
}

InputModel("username", "text");
InputModel("password", "password");
InputModel("repassword", "password");

function InputModel(spanName, inputType) {
  const input = document.createElement("input");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  p.id = spanName + "p";
  span.innerText = spanName;
  div.id = spanName;
  input.type = inputType;
  div.appendChild(span);
  div.appendChild(input);
  div.appendChild(p);
  Container.appendChild(div);
  //add the verification
  const getDiv = document.getElementById(spanName);
  getDiv.children[1].onblur = function () {
    checkLevel(getDiv.children[1].value, spanName, p);
  };
}

const button = document.createElement("button");
