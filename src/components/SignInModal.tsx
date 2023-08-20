import React from 'react'
import Modal from './ui/Modal'

const AddFilterModal = () => {
  return (
    <Modal id="sign_in" close={() => window.sign_in.close()}>
        <p>Test</p>
    </Modal>
  )
}

export default AddFilterModal