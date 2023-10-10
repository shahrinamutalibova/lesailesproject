import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, editIncome, deleteIncome } from "./usersSlice";
import { Modal, Button, Form, Input } from "antd";
import { EditFilled ,DeleteFilled } from "@ant-design/icons"

const Incomes = () => {
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [cashboxId, setCashboxId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleOk = () => {
    if (selectedId !== null) {
      dispatch(editIncome({ id: selectedId, userId, amount, cashboxId, date: new Date() }));
      setSelectedId(null);
    } else {
      dispatch(addIncome({ userId, amount, cashboxId, date: new Date() }));
    }
    setUserId("");
    setAmount("");
    setCashboxId("");
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleEdit = (user) => {
    setSelectedId(user.id);
    setUserId(user.userId);
    setAmount(user.amount);
    setCashboxId(user.cashboxId);
    setVisible(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteIncome(id));
  };

  return (
    <div className="p-3">
      <div style={{justifyContent:"space-between"}} className="d-flex align-items-center">
        <h1>Foydalanuvchilar</h1>
      <Button onClick={() => setVisible(true)}> + Add</Button>
      </div>
      <Modal
        title={selectedId !== null ? "Edit Income" : "Add Income"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Users">
            <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
          </Form.Item>
          <Form.Item label="Quantity">
            <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </Form.Item>
          <Form.Item label="Cashbox ID">
            <Input  value={cashboxId} onChange={(e) => setCashboxId(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>

      <table className="w-100  table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Users</th>
            <th>Quantity</th>
            <th>Cashbox</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userId}</td>
              <td>{user.amount}</td>
              <td>{user.cashboxId}</td>
              <td>{new Date(user.date).toLocaleString()}</td>
              <td>
                <Button className="btn  badge" style={{width:"30px",height:"30px",borderRadius:"50%",background:"lightblue"}} onClick={() => handleEdit(user)}><EditFilled/></Button>
                <Button  className="mx-3 align-items-center badge" style={{width:"30px",height:"30px",borderRadius:"50%",background:"pink"}} onClick={() => handleDelete(user.id)}><DeleteFilled/></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Incomes;
