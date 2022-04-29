import React, {Component} from 'react';
import {StyleSheet, TextInput, Dimensions, View} from 'react-native';
// import globalStyles from '../../utility/appConstant/Styles';
class CustomTextInput extends Component {
  render() {
    const {
      value,
      placeholder,
      secureTextEntry,
      onChangeText = () => {},
    } = this.props;
    // const {text_color, gray} = globalStyles.colorCodes;
    return (
      <View>
        <TextInput
          autoCapitalize={'none'}
          style={styles.textFields()}
          value={value}
          placeholder={placeholder}
        //   placeholderTextColor={gray}
          secureTextEntry={secureTextEntry ? true : false}
          onChangeText={text => onChangeText(text)}
        />
      </View>
    );
  }
}
export default CustomTextInput;

const styles = StyleSheet.create({
  textFields: () => ({
    fontSize: 15,
    marginTop: 20,
    // borderBottomColor: globalStyles.colorCodes.divider,
    borderBottomWidth: 1,
    // paddingBottom: 0,
    // textAlign: 'center',
    // color: text_color,
    width: Dimensions.get('window').width * 0.95,
    height: 45,
    // margin: 12,
    // borderBoWidth: 1,
    // borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  }),
});
