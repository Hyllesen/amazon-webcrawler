const httpRequest = require("./httpRequest");

async function saveHtml(url) {
  const html = await httpRequest.getRequest(url);
  await httpRequest.saveHtml(html);
}

saveHtml(
  "https://www.amazon.com/Glorious-Aura-Keycaps-Mechanical-Keyboards/dp/B07D6WMVMW/ref=pd_rhf_dp_p_img_9?_encoding=UTF8&psc=1&refRID=WXBNFAHDSEDD455X21PC"
);
