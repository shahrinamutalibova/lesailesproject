import React, { useState, useEffect } from 'react';
import { Card, Row, Col ,Modal ,Button  } from 'antd';
import axios from 'axios';

const ItemsPage = ({count ,setCount}) => {
  const [items, setItems] = useState([]);
  const [buttons, setButtons] = useState(true); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [counterOnModal, setCounterOnModal] = useState(0);
  const [initialPrice, setInitialPrice] = useState(0);
  const [selectedItemPrice, setSelectedItemPrice] = useState(0);
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCounterOnModal(count);
    if (selectedItem) {
      setSelectedItemPrice(selectedItem.price * count);
    }
  }, [count]);
  
  useEffect(() => {
    if (selectedItem) {
      const price = selectedItem.price * counterOnModal;
      setSelectedItemPrice(price);
    }
  }, [counterOnModal, selectedItem]);
  
  const handleButtonClick = (id, operation) => {
    if (buttons[id]) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setButtons({
      ...buttons,
      [id]: !buttons[id]
    });
  }
  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    setInitialPrice(item.price);
    setSelectedItemPrice(item.price);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setCounterOnModal(0);
  };
 
  const handleOk = () => {
    setIsModalVisible(false);
    const updatedItems = items.map(item => {
      if (item.id === selectedItem.id) {
        return {
          ...item,
          count: counterOnModal,
          price: selectedItemPrice,  
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
    setCounterOnModal(0);
    setSelectedItemPrice(0); 
  };
  

  const incrementCounter = () => {
    var incrementedCounter = counterOnModal + 1;
    setCounterOnModal(incrementedCounter);
  
    if (selectedItem) {
      const newPrice = initialPrice * incrementedCounter;
      setSelectedItemPrice(newPrice);
    }
  };
  const decrementCounter = () => {
    if (counterOnModal > 0) {
      var decrementedCounter = counterOnModal - 1;
      setCounterOnModal(decrementedCounter);
  
      if (selectedItem) {
        const newPrice = initialPrice * decrementedCounter;
        setSelectedItemPrice(newPrice);
      }
    }
  };
  
  
  const fetchData = async () => {
    try {
      const imagesResponse = await fetch('http://localhost:5000/images');
      const textsResponse = await axios.get('http://localhost:5000/texts');
      const pricesResponse = await axios.get('http://localhost:5000/prices');

      const imageData = await imagesResponse.json();
      const textsData = textsResponse.data;
      const pricesData = pricesResponse.data;

      const combinedData = imageData.map((item, index) => ({
        ...item,
        text: textsData[index] ? textsData[index].content : '',
        price: pricesData[index] ? pricesData[index].price : '',
        count: 0 
      }));

      setItems(combinedData);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  

  return (
    <div>
       <h1 style={{marginLeft:"50px",fontWeight:"300"}}>Setlar</h1>
       <Row gutter={[10,10]} style={{padding:"30px 50px"}}>
        {items.map((item, index) => {
          return (
            <Col  key={item.id} style={{ display: "flex", gap:"10px",flexWrap:"wrap" }}>
            <Card className='card' >
              <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img onClick={() => showModal(item)} style={{ width: "185px",margin:"auto"}} src={item.url} alt="" />
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px"}}>{item.text}</h3>
                <h2 style={{fontWeight:"700",color:"red"}}>{item.price}</h2>   
                <div style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
          <div style={{display:"flex",gap:"20px"}}>
          { buttons[item.id] ? ( 
                    <div style={{display:"flex",gap:"120px"}}>
                      <button 
                        onClick={() => handleButtonClick(item.id)}  
                        style={{background:"blue",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
                      > 
                        - 
                      </button>
                      <button 
                        onClick={() => handleButtonClick(item.id)}  
                        style={{background:"red",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
                      > 
                        + 
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleButtonClick(item.id)}  
                      style={{background:"red",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
                    > 
                      + 
                    </button>
                  )}
          </div>
                </div>
              </Card>
              {
    selectedItem && (
      <Modal title={selectedItem.text} style={{width:"100%",height:"100%"}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <center>  <img src={selectedItem.url} style={{ width: '50%',height:"200px" }} alt={selectedItem.text} />
</center>
        <Button onClick={incrementCounter}>
          +
        </Button>

        <Button onClick={decrementCounter} disabled={counterOnModal === 1}>
          -
        </Button>

        <p>Current count: {counterOnModal}</p>
        <p>Price: {selectedItemPrice * selectedItem.price}</p>

      </Modal>
    )
  }
            </Col>
          )
        })}
      </Row>
       <h1 style={{marginLeft:"50px",fontWeight:"300"}}>Sneklar</h1>
       <Row gutter={[10,10]} style={{padding:"30px 50px"}}>
        {items.map((item, index) => {
          return (
            <Col key={item.id} style={{ display: "flex", gap:"10px" ,flexWrap:"wrap"}}>
              <Card className='card'>
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img style={{ width: "185px",margin:"auto"}} src={item.url} alt="" />
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px"}}>{item.text}</h3>
                <h2 style={{fontWeight:"700",color:"red"}}>{item.price}</h2>   
                <div style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                  { buttons ? ( 
          <button 
            onClick={handleButtonClick}  
            style={{background:"red",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
          > 
            + 
          </button>
        ) : (
          <div style={{display:"flex",gap:"120px"}}>
          <button 
             onClick={() => setCount(count + 1)}  
            style={{background:"red",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
          > 
            + 
          </button>
          <button 
            onClick={() => setCount(count - 1)}  
            style={{background:"\blue",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
          > 
            - 
          </button>
          </div>
        )
       }
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
      <h1 style={{marginLeft:"50px",fontWeight:"300"}}>Longerlar</h1>
       <Row gutter={[10,10]} style={{padding:"30px 50px"}}>
        {items.map((item, index) => {
          return (
            <Col  key={item.id} style={{ display: "flex", gap:"10px" ,flexWrap:"wrap"}}>
              <Card className='card'>
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img style={{ width: "185px",margin:"auto"}} src={item.url} alt="" />
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px"}}>{item.text}</h3>
                <h2 style={{fontWeight:"700",color:"red"}}>{item.price}</h2>   
                <div style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                  { buttons ? ( 
          <button 
            onClick={handleButtonClick}  
            style={{background:"red",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
          > 
            + 
          </button>
        ) : (
          <div style={{display:"flex",gap:"120px"}}>
          <button 
             onClick={() => setCount(count + 1)}  
            style={{background:"red",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
          > 
            + 
          </button>
          <button 
            onClick={() => setCount(count - 1)}  
            style={{background:"blue",cursor:"pointer",marginTop:"5px",color:"white",width:"30px",height:"30px",border:"none",borderRadius:"7px"}}
          > 
            - 
          </button>
          </div>
        )
       }
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}; 

export default ItemsPage;
