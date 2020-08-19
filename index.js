import { NativeModules } from "react-native";

const { hcaptcha } = NativeModules;

import React, { PureComponent } from "react";
import { WebView } from "react-native-webview";

class ReactNativeRecaptchaV3 extends PureComponent {
  render() {
    const { onCheck, url, siteKey } = this.props;
    const recaptchaHtmlWithKey = recaptchaHtml.replace(
      "[your_site_key]",
      siteKey
    );

    return (
      <WebView
        originWhitelist={["*"]}
        style={{ width: 0, height: 0 }}
        startInLoadingState
        javaScriptEnabledAndroid
        javaScriptEnabled
        source={{ html: recaptchaHtmlWithKey, baseUrl: url }}
        onMessage={(event) => onCheck(event.nativeEvent.data)}
      />
    );
  }
}

export default hcaptcha;
