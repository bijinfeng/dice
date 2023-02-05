// ref to https://levelup.gitconnected.com/react-native-typescript-and-react-native-web-an-arduous-but-rewarding-journey-8f46090ca56b
// https://github.com/reactrondev/react-native-web-swiper/issues/41
import {
  Image as RNImage,
  Text as RNText,
  TextInput as RNTextInput,
} from "react-native-web";
// Let's export everything from react-native-web
export * from "react-native-web";
// Improve API compatibility with React Native by exporting 'react-art' as 'ART'.
// https://github.com/necolas/react-native-web/commit/321051b72366666ba6e28985cff017cb6d3c506d
import ReactART from "react-art";

// And let's stub out everything that's missing!
export const ViewPropTypes = {
  style: () => {},
};

RNTextInput.propTypes = {
  style: () => {},
};
RNText.propTypes = {
  style: () => {},
};
RNImage.propTypes = {
  style: () => {},
  source: () => {},
};

export const ART = ReactART;
export const Text = RNText;
export const Image = RNImage;
export const TextInput = RNTextInput;
export const requireNativeComponent = () => {};
