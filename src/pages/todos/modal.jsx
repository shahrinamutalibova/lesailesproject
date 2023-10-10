import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useDispatch } from "react-redux";

function TodoModal(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()

    const showModal = () => setIsModalOpen(prev => !prev);
    const handleCancel = () => setIsModalOpen(false);

    const onFinish = (value) => {
        dispatch({ type: 'addPost', payload: value })
        showModal()
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                +Add
            </Button>
            <Modal title="Basic Modal" visible={isModalOpen} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
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

export default TodoModal;