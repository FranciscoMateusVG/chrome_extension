export const injection = (idOrClass, jsonAtributes) => {
  const { icon, widgetBrandColor, backgroundColor, mode, layout, font, size } =
    JSON.parse(jsonAtributes);

  //Clean
  const papayaElementId = document.getElementById(idOrClass);
  if (papayaElementId) {
    papayaElementId.innerHTML = "";
    papayaElementId.id = "papaya-universal";
  }

  const papayaElementClass = document.getElementsByClassName(idOrClass)[0];
  if (papayaElementClass) {
    papayaElementClass.innerHTML = "";
    papayaElementClass.id = "papaya-universal";
  }

  // - import and set up partner config
  const addUniversal = (universalContainerId) => {
    // inject button element at target id
    const universalContainer = document.getElementById(universalContainerId);
    const key = "INSERT_KEY_HERE";

    const brandColor = widgetBrandColor
      ? widgetBrandColor.replace("#", "")
      : "";
    const bgColor = backgroundColor ? backgroundColor.replace("#", "") : "";
    const host = "test.papayapay.com";

    universalContainer.innerHTML = `
            <iframe
            id="papayaUniversalIframe"
            src="${
              papayaWidget.papayaProtocolAndHost
            }/widgets/v2/endpoints/universal.html.php?isGeneric=${""}&partner=${
      papayaWidget.partnerUrlSafe
    }&mobile=${papayaWidget.funcs.isMobile()}&icon=${icon}&brandColor=${brandColor}&key=${key}&host=${host}&mode=${mode}&layout=${layout}&font=${font}&size=${size}&pph=${
      papayaWidget.papayaProtocolAndHost
    }&backgroundColor=${bgColor}"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            </iframe>`;

    papayaWidget.frameIds.push("papayaUniversalIframe");
    const universalFrame = document.getElementById("papayaUniversalIframe");
    if (size === "small") {
      universalContainer.style.height = "155px";
      universalFrame.style.height = "155px";
    }
    if (layout === "vertical" && size === "small") {
      universalContainer.style.height = "235px";
      universalFrame.style.height = "235px";
    }

    if (layout !== "vertical" && size === "medium") {
      universalContainer.style.height = "195px";
      universalFrame.style.height = "195px";
    }

    if (layout !== "vertical") {
      universalContainer.style.height = "205px";
      universalFrame.style.height = "205px";
    }
    return universalContainer;
  };

  const addStyle = () => {
    // inject widget css
    let styleElement = document.createElement("link");
    styleElement.rel = "stylesheet";
    styleElement.type = "text/css";
    styleElement.href = `${papayaWidget.papayaProtocolAndHost}/widgets/${
      papayaWidget.widgetVersion
    }/endpoints/style.css.php?type=payload&isGeneric=${""}&partner=${
      papayaWidget.partnerUrlSafe
    }`;
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    return styleElement;
  };

  const papayaWidget = {
    universalConfig: {
      targetElementId: "papaya-universal",
      template: "default",
      theme: "default",
      functions:
        "phoneInputMask,phoneInputCheckInterval,phoneSubmit,retrySMS,openDownloadPage,universalController",
      override: {
        style: "",
      },
    },
    papayaProtocolAndHost: "https://test.papayapay.com",
    widgetVersion: "v2",
    widgetGAVariantName: "",
    partner: "Universal",
    partnerUrlSafe: "Universal",
    frameIds: ["papayaRequestIframe", "papayaUniversalIframe"],
    funcs: {
      isMobile: () => {
        // check against browser user agent
        const mobileUserAgents = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i,
        ];
        return mobileUserAgents.some((expression) => {
          return navigator.userAgent.match(expression);
        });
      },
      addUniversal,
      addStyle,
    },
  };
  papayaWidget.partner = "Universal";
  // papayaWidget.isGeneric = window.PAPAYA_WIDGET_IS_GENERIC;
  papayaWidget.partnerUrlSafe = encodeURIComponent(papayaWidget.partner);
  // papayaWidget.cookieName = "papayaWidgetUserSaw";

  papayaWidget.funcs.addStyle();
  console.log("universal enabled");
  papayaWidget.funcs.addUniversal(papayaWidget.universalConfig.targetElementId);
};
