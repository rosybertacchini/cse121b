export function createButton(id, TheinnerHtml) {
  const button = document.createElement("button");
  button.id = id;
  button.innerHTML = TheinnerHtml;

  return button;
}
