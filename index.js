import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import Button from './button';
import FadeInView from './fade_in_view';

const ActionModal = ({
  modalVisible,
  backgroundColor,
  buttonText,
  children,
  onCancel,
  cancelButton,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={onCancel}>
    <View style={styles.modalContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={onCancel}></TouchableOpacity>
      {children}
      {cancelButton && (
        <Button onPress={onCancel} text={buttonText || 'Cancel'} />
      )}
    </View>
  </Modal>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
  },
});

export default ActionModal;
