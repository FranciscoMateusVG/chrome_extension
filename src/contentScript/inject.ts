export const inject = (where: string, element: Element) => {
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
    script.src = "";
    script.id = "widget-script";
    script.dataset.key = "INSERT_KEY_HERE";
    script.dataset.fontFamily = "OpenSans-Regular";
    script.dataset.brandColor = "#FBD227";
    script.dataset.backGroundColor = "#FAFAFA";
    document.body.appendChild(script);

    /*
- import and set up partner config
- add widget functions
- add window message listener logic
- load widget
*/

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
        addUniversal: (universalContainerId, isCollapsed = false) => {
          // inject button element at target id
          const dismissalClick = ``;
          const collapsed = isCollapsed ? "collapsed" : "";
          const mobile = papayaWidget.funcs.isMobile() ? "mobile" : "";
          const protocolAndHost = window.pph
            ? window.pph
            : papayaWidget.papayaProtocolAndHost;
          const universalContainer =
            document.getElementById(universalContainerId);
          const widgetScript = document.querySelector(
            "#widget-script"
          ) as HTMLScriptElement;
          const icon = widgetScript.dataset.icon;
          const widgetBrandColor = widgetScript.dataset.brandColor;
          const brandColor = widgetBrandColor
            ? widgetBrandColor.replace("#", "")
            : "";
          const widgetBackGroundColor = widgetScript.dataset.backGroundColor;
          const backgroundColor = widgetBackGroundColor
            ? widgetBackGroundColor.replace("#", "")
            : "";
          const key = widgetScript.dataset.key;
          const mode = widgetScript.dataset.mode;
          const layout = widgetScript.dataset.layout;
          const font = widgetScript.dataset.fontFamily;
          const size = widgetScript.dataset.size;
          const host = window.location.hostname;

          universalContainer.innerHTML = `
                          <div ${dismissalClick} id="universalModalBackground" class="${collapsed} ${mobile}" style="z-index: 999999;">
                          <div id="universalModalContent">
                          <iframe
                           id="papayaUniversalIframe"
                             src="${protocolAndHost}/widgets/v2/endpoints/universal.html.php?isGeneric=false
                                &partner=${
                                  papayaWidget.partnerUrlSafe
                                }&mobile=${papayaWidget.funcs.isMobile()}&icon=${icon}&brandColor=${brandColor}&key=${key}&host=${host}&mode=${mode}&layout=${layout}&font=${font}&size=${size}&pph=${protocolAndHost}&backgroundColor=${backgroundColor}"
                             scrolling="no"
                             frameborder="0"
                             allowtransparency="true"
                          </iframe>
                          </div>
                          </div>`;

          papayaWidget.frameIds.push("papayaUniversalIframe");

          const universalFrame = document.getElementById(
            "papayaUniversalIframe"
          );

          if (size === "small") {
            universalContainer.style.height = "155px";
            universalFrame.style.height = "155px";
          }

          if (layout !== "vertical" && !size) {
            universalContainer.style.height = "210px";
            universalFrame.style.height = "210px";
          }

          if (layout === "vertical" && size === "small") {
            universalContainer.style.height = "235px";
            universalFrame.style.height = "235px";
          }

          if (layout !== "vertical" && size === "medium") {
            universalContainer.style.height = "195px";
            universalFrame.style.height = "195px";
          }

          if (layout === "vertical" && size === "medium") {
            universalContainer.style.height = "240px";
            universalFrame.style.height = "240px";
          }

          if (layout === "vertical" && size === "medium") {
            universalContainer.style.height = "240px";
            universalFrame.style.height = "240px";
          }

          if (layout === "vertical") {
            if (papayaWidget.funcs.isMobile()) {
              universalContainer.style.height = "170px";
              universalFrame.style.height = "180px";
            } else {
              universalContainer.style.height = "260px";
              universalFrame.style.height = "260px";
            }
          }
        },
        addStyle: () => {
          // inject widget css
          let styleElement = document.createElement("link");
          styleElement.rel = "stylesheet";
          styleElement.type = "text/css";
          styleElement.href = `${papayaWidget.papayaProtocolAndHost}/widgets/${papayaWidget.widgetVersion}/endpoints/style.css.php?type=payload&isGeneric=false&partner=${papayaWidget.partnerUrlSafe}`;
          document.getElementsByTagName("head")[0].appendChild(styleElement);
          return styleElement;
        },
      },
    };
    papayaWidget.partner = "INSERT_PAYEE_NAME_HERE";
    papayaWidget.partnerUrlSafe = encodeURIComponent(papayaWidget.partner);
    papayaWidget.frameIds = [];

    // - add widget functions
    papayaWidget.funcs.isMobile = () => {
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
    };
    // - load widget
    // style always first
    papayaWidget.funcs.addStyle();

    console.log("universal enabled");
    papayaWidget.funcs.addUniversal(
      papayaWidget.universalConfig.targetElementId
    );
  }
};
