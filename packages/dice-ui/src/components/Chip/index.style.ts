import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 12,
    height: 24,
    width: 24,
  },
  avatarSelected: {
    backgroundColor: 'rgba(0, 0, 0, .29)',
    left: 4,
    position: 'absolute',
    top: 4,
  },
  avatarWrapper: {
    marginRight: 4,
  },
  closeButtonStyle: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  closeIcon: {
    marginRight: 4,
  },
  container: {
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: Platform.select({ default: 'column', web: 'row' }),
    minHeight: 32,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 4,
    position: 'relative',
  },
  icon: {
    alignSelf: 'center',
    padding: 4,
  },
  text: {
    lineHeight: 24,
    marginVertical: 4,
    minHeight: 24,
    textAlignVertical: 'center',
  },
  touchable: {
    flex: 1,
  },
});

export default styles;
