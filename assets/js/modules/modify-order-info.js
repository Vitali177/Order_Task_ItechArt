export function modifyOrderInfo(button) {
  const inputs = document.querySelectorAll(".tab--selected input");
  let isReadOnly;
  let buttonText;

  if (!button.classList.contains("button-edit-display--active")) {
    buttonText = "Display";
    isReadOnly = false;
  } else {
    buttonText = "Edit";
    isReadOnly = true;

    // ! Здесь будет функция сохранения изменений на сервер
  }

  button.innerHTML = buttonText;
  button.classList.toggle("button-edit-display--active");

  inputs.forEach(input => {
    input.readOnly = isReadOnly;
    input.classList.toggle("is-modify");
  });
}