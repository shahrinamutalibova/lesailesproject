import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";

function EditModal({ item }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data } = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();

    const showModal = () => {
        dispatch({ type: "editData", payload: item });
        setIsModalOpen(prev => !prev);
    }

    const onFinish = (value) => {
        dispatch({ type: "editItem", payload: value });
        showModal();
    };

    return (
        <>
            <Button type="primary" className={'bg-success'} onClick={showModal}>
                Edit
            </Button>
            <Modal title="Edit Modal" visible={isModalOpen} onCancel={showModal}>
                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true, ...data }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please enter the title' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Body"
                        name="body"
                        rules={[{ required: true, message: 'Please enter the body' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className={'text-end'}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default EditModal;
