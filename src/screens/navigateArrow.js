import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { navigate } from '../../actions';

const previousArrowChevron = require('../../assets/previousA.png');
const nextArrowChevron = require('../../assets/NextA.png');

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 24,
    paddingLeft: 24,
    fontFamily: 'Gustan-Medium',
  },
  buttonStyle: {
    backgroundColor: '#E12927',
    borderRadius: 0,
  },
});

const Arrow = (props) => {
  const { label } = props;
  const { textStyle, buttonStyle } = styles;


  return (
    <View>
      {props.pageId !== null ? (
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => {
            if (props.resetAll) props.resetAll();
            props.navigate(props.pageId);
          }}
        >
          <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const PreviousArrow = connect(
  null,
  { navigate }
)(props => Arrow(props, previousArrowChevron));
const NextArrow = connect(
  null,
  { navigate }
)(props => Arrow(props, nextArrowChevron));

export { PreviousArrow, NextArrow };
