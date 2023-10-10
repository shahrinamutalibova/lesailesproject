import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/actions/postAction';
import axios from 'axios';

function PostModal(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { posts } = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    const showModal = () => setIsModalOpen((prev) => !prev);
    const handleCancel = () => setIsModalOpen(false);

    const onFinish = async (values) => {
        let data = {
            id: posts.length + 1,
            title: values.title,
            body: values.body
        };
        try {
            await axios({
                method: 'post',
                url: 'http://localhost:5000/posts',
                data,
            });
            dispatch(getPost());
        } catch (error) {
            console.error('Error adding post:', error);
        }
        showModal();
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                +Add
            </Button>
            <Modal
                title="Basic Modal"
                visible={isModalOpen}
                onCancel={handleCancel}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
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
                        rules={[{ required: true, message: "Titleni to'liq kiriting" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Body"
                        name="body"
                        rules={[{ required: true, message: "Bodyni to'liq kiriting" }]}
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

export default PostModal;
