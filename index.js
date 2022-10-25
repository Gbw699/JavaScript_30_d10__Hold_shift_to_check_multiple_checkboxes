const checkboxes = document.querySelectorAll(
  '.container input[type="checkbox"]'
);
const checkboxesArray = Array.apply(null, checkboxes);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", (e) => {
    if (checkbox.className === "checked") {
      checkbox.className = "";
      checkbox.checked = false;
    } else {
      checkbox.className = "checked";
      checkbox.checked = true;
    }

    for (let i = 0; i < checkboxes.length; i++) {
      if (
        checkboxes[i].className === "checked" &&
        checkboxes[i].id !== checkbox.id &&
        e.shiftKey === true
      ) {
        let index = checkboxesArray.findIndex(
          (value) => value.id === checkbox.id
        );
        if (index > i) {
          for (index; index > i; index--) {
            checkboxes[index].className = "checked";
            checkboxes[index].checked = true;
          }
        } else if (index < i) {
          for (index; index < i; index++) {
            checkboxes[index].className = "checked";
            checkboxes[index].checked = true;
          }
        } else {
          continue;
        }
      }
    }
  })
);
