const $ = (element) => {
  return document.getElementById(element);
};

// listener event click input full name
fullname.addEventListener("click", () => {
  fullname.setAttribute("minlength", "6");
  fullname.setAttribute("maxlength", "50");
});

// validate Full Name

const validateFullname = () => {
  let fullname = $("fullName");

  if (fullname.value === "") {
    $("msgFullName").innerHTML =
      '<span class="text-danger">This field is required.</span>';
  }

  if (fullname.value.indexOf(" ") === -1) {
    $("msgFullName").innerHTML =
      '<span class="text-danger">Full Name must contain at least 2 words</span>';
  }

  const regExpPatten = new RegExp("", "gi");
};

const validateForm = () => {
  validateFullname();
};
