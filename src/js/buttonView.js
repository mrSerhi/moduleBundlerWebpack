export const button = (className, content) => {
  const template = `
    <button type="button" class="${className}">${content}</button>
  `;
  return template;
};

export const btnblock = styles => {
  const div = document.createElement("div");
  div.classList.add("buttons-block");
  Object.assign(div.style, styles);
  document.body.appendChild(div);
};
