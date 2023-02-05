import path from "path";
import { IApi } from "umi";

export default (api: IApi) => {
  api.describe({
    key: "reactNative",
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });

  api.chainWebpack((config) => {
    config.resolve.extensions.add(".android.js").add(".ios.js").add(".web.js");
    return config;
  });

  api.modifyConfig((memo) => {
    return {
      ...memo,
      define: {
        ...memo.define,
        __DEV__: process.env.NODE_ENV === "development",
      },
      alias: {
        ...memo.alias,
        // Directly match react-native to react-native-web.
        "react-native$": path.resolve(__dirname, "react-native-web"),
        // Alias react-native-svg to svgs
        "react-native-svg$": "react-native-svg-web",
        // Alias react-native-linear-gradient to web
        "react-native-linear-gradient": "react-native-web-linear-gradient",
        // Alias react-native-maps to web
        "react-native-maps$": "react-native-web-maps",
        // Alias core react-native internals to react-native-web equivalents
        "react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$":
          "react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter",
        "react-native/Libraries/vendor/emitter/EventEmitter$":
          "react-native-web/dist/vendor/react-native/emitter/EventEmitter",
        "react-native/Libraries/vendor/emitter/EventSubscriptionVendor$":
          "react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor",
        "react-native/Libraries/EventEmitter/NativeEventEmitter$":
          "react-native-web/dist/vendor/react-native/NativeEventEmitter",
        // Alias core react-native asset management internals to unimodule equivalents.
        "react-native/Libraries/Image/AssetSourceResolver$":
          "expo-asset/build/AssetSourceResolver",
        "react-native/Libraries/Image/assetPathUtils$":
          "expo-asset/build/Image/assetPathUtils",
        "react-native/Libraries/Image/resolveAssetSource$":
          "expo-asset/build/resolveAssetSource",
        "react-native/Libraries/Pressability/PressabilityDebug$": path.resolve(
          __dirname,
          "PressabilityDebug"
        ),
        "react-native/Libraries/Utilities/codegenNativeComponent$":
          path.resolve(__dirname, "codegenNativeComponent"),
      },
    };
  });
};
