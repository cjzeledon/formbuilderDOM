// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// // HINTS:
// // As you can see, we access the first element in the array
// // with [0] and then grab the property "label" using the "." operator
// ( function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------

const form = document.querySelector("#fields");

function MyFirstName() {
let firstName = document.createElement("Input");
form.appendChild(firstName);
firstName.setAttribute('type', formData[0].type);
firstName.placeholder = formData[0].label;
}MyFirstName();

function MyLastName() {
let lastName = document.createElement("Input");
form.appendChild(lastName);
lastName.setAttribute('type', formData[1].type);
lastName.placeholder = formData[1].label;
}MyLastName();

function MyEmailAddress() {
let emailAddress = document.createElement("Input");
form.appendChild(emailAddress);
emailAddress.setAttribute('type', formData[2].type);
emailAddress.placeholder = formData[2].label;
}MyEmailAddress();

function MyWebSiteURL() {
let url = document.createElement("Input");
form.appendChild(url);
url.setAttribute('type', formData[3].type);
url.placeholder = formData[3].label;
}MyWebSiteURL();

// STILL WORKING ON THE LANGUAGE DEPARTMENT...
function ISpeak() {
let language = document.createElement("Select");
let list = [];
form.appendChild(language);
language.setAttribute('type', formData[4].options);

for (i = 0; i > formData[4].options.length; i++){
      if (formData[4].options === options){
        list.push(formData[4].options[i]);
      }
return list;
}

}ISpeak();

function CommentMyWay() {
let comments = document.createElement("Input");
form.appendChild(comments);
comments.setAttribute('type', formData[5].type);
comments.placeholder = formData[5].label;
}CommentMyWay();

function MobileNumber() {
let cellPhone = document.createElement("Input");
form.appendChild(cellPhone);
cellPhone.setAttribute('type', formData[6].type);
cellPhone.placeholder = formData[6].label;
}

MobileNumber();

function HomeNumber() {
let homePhone = document.createElement("Input");
form.appendChild(homePhone);
homePhone.setAttribute('type', formData[7].type);
homePhone.placeholder = formData[7].label;
}HomeNumber();
