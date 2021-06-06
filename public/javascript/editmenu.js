async function editFormHandler(event) {
  event.preventDefault();

  const menuDescription = document
    .querySelector('input[name="menu-description"]')
    .value.trim();
  const menuIngredients = document
    .querySelector('input[name="menu-ingredients"]')
    .value.trim();
  const menuPrice = document
    .querySelector('input[name="menu-price"]')
    .value.trim();
  const menuId = document.querySelector('input[name="menu-id"]').value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/menu/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      menuDescription,
      menuIngredients,
      menuPrice,
      menuId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-form-style")
  .addEventListener("submit", editFormHandler);
