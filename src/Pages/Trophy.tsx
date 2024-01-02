
import React, { useState } from 'react';
import CustomBar from '../components/CustomBar';
import Box from '../components/Box';


const Accounts = [
  {
    id: 1,
    name: 'Ajalla Ugo',
    account_number: '9102356712',
    bank_name: 'Access Bank'
  },
  {
    id: 2,
    name: 'Ajalla Ugo',
    account_number: '1404040987',
    bank_name: 'First Bank'
  },
];
const Trophy = () => {
  const [amount, setAmount] = useState('')
  const [selected, setSelected] = useState(1)

  const [showModal, setShowModal] = useState(false);
  const [bankModal, setBankModal] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const confirmTransaction = () => {
    setShowModal(false);
    setShowOtpInput(true);
  }

  const selectAccount = (id: any) => {
    setSelected(id);
  }
  return (
    <Box flex={1} bg='white' pt={'m'} >
      <CustomBar backgroundColor='white' barStyle='dark-content' />
      {/* <Header /> */}
     

    </Box>
  )
}

export default Trophy