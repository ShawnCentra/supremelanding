import React, { useState, useEffect } from "react";

const marketoScriptId = "mktoForms";

export default function MarketoForm({ formId }) {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!document.getElementById(marketoScriptId)) {
      loadScript();
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    isLoaded &&
      window?.MktoForms2?.loadForm(
        "//app-ab28.marketo.com",
        "748-KKO-677",
        formId
      );
  }, [isLoaded, formId]);

  const loadScript = () => {
    var s = document.createElement("script");
    s.id = marketoScriptId;
    s.type = "text/javascript";
    s.async = true;
    s.src = "//app-ab28.marketo.com/js/forms2/js/forms2.min.js";
    s.onreadystatechange = function () {
      if (this.readyState === "complete" || this.readyState === "loaded") {
        setIsLoaded(true);
      }
    };
    s.onload = () => setIsLoaded(true);
    document.getElementsByTagName("head")[0].appendChild(s);
  };

  return (
    <div>
      <form id={`mktoForm_${formId}`}></form>
    </div>
  );
}
