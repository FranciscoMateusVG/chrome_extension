export const inject = (where: string, element: Element) => {
  console.log(element);
  console.log(where);
  if (element && where) {
    const div = document.createElement("div");
    div.id = "papaya-universal";
    switch (where) {
      case "before":
        element.parentNode.insertBefore(div, element);
        break;
      case "after":
        element.parentNode.insertBefore(div, element.nextElementSibling);
        break;
      default:
        element.innerHTML = "";
        element.id = "papaya-universal";
        break;
    }

    window.PAPAYA_PAYEE_NAME = "INSERT_PAYEE_NAME_HERE";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://papayapay.com/widgets/papaya-modal.min.js";
    script.id = "widget-script";
    script.dataset.key = "INSERT_KEY_HERE";
    script.dataset.fontFamily = "OpenSans-Regular";
    script.dataset.brandColor = "#FBD227";
    script.dataset.backGroundColor = "#FAFAFA";
    document.body.appendChild(script);
  }
};
