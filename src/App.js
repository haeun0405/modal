import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 이름 및 가격 입력 처리 이벤트 핸들러
  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    if (isNaN(value)) return;
    setPrice(value.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };
  const handleNameChange = (e) => setName(e.target.value);

  const handleLargePrimaryButtonClick = () => {
    alert('버튼을 만들어보세요');
  };

  const handleLargeNegativeButtonClick = () => {
    const userInput = prompt('어렵나요?');
  };

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const toggleModal1 = () => {
    setModal1Open(!modal1Open);
  };

  const toggleModal2 = () => {
    setModal2Open(!modal2Open);
  };

  const selectOptions1 = [
    { value: '리액트', label: '리액트' },
    { value: '자바', label: '자바' },
    { value: '스프링', label: '스프링' },
    { value: '리액트네이티브', label: '리액트네이티브' },
  ];
  const selectOptions2 = [
    { value: '리액트', label: '리액트' },
    { value: '자바', label: '자바' },
    { value: '스프링', label: '스프링' },
    { value: '리액트네이티브', label: '리액트네이티브' },
  ];

  const handleSaveButtonClick = () => {
    alert(`name: ${name}, price: ${price.replace(/,/g, '')}`);
  };

  return (
    <>
      {/* Button 컴포넌트 사용 */}
      <div>
        <h1>Button</h1>
        <ButtonGroup>
          <Button size="large" onClick={handleLargePrimaryButtonClick} label="Large Primary Button" hasIcon />
          <Button size="medium" label="Medium" />
          <Button size="small" label="Small" />
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" variant="negative" onClick={handleLargeNegativeButtonClick} label="Large Negative Button" />
          <Button size="medium" variant="negative" label="Medium" />
          <Button size="small" variant="negative" label="Small" />
        </ButtonGroup>
      </div>

      {/* Input 컴포넌트 사용 */}
      <div>
        <h1>Input</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="name">이름: </label>
          <Input id="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <label htmlFor="price" style={{ marginLeft: '1rem' }}>가격: </label>
          <Input id="price" placeholder="0" value={price} onChange={handlePriceChange} />
          <Button onClick={handleSaveButtonClick} label="저장하기" />
        </div>
      </div>
      
      {/* Modal 컴포넌트 사용 */}
      <h1>Modal</h1> 
      <div style={{ display: 'flex' }}>
        <Button onClick={toggleModal1} label="Open Modal" />
        <Modal
          isOpen={modal1Open}
          onRequestClose={toggleModal1}
          overlayClickClose={false}
        >
          <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
          <ButtonGroup>
          <Button variant="negative" onClick={toggleModal1} color="black" label="취소">취소</Button> 
            <Button color="black" label="확인">확인</Button>
          </ButtonGroup>
        </Modal>

        <Button onClick={toggleModal2} label="Open Modal" />
        <Modal
          isOpen={modal2Open}
          onRequestClose={toggleModal2}
          overlayClickClose={true}
        >
          <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
          <Button onClick={toggleModal2} color="black" label="닫기">닫기</Button>
        </Modal>
      </div>

      {/* Select 컴포넌트 사용 */ }
      < div >
        <h1>Select</h1>
        <Select options={selectOptions1} />
        <Select options={selectOptions2} />
      </div >
    </>
  );
}

export default App;