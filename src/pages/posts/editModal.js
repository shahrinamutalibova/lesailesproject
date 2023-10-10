import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editData, editItem, getPost } from "../../redux/actions/postAction";
import axios from "axios";

function EditModal({ item }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data } = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();

    const showModal = () => {
        editData(dispatch, item);
        setIsModalOpen((prev) => !prev);
    };

    const handleCancel = () => setIsModalOpen(false);
    const onFinish = (values) => {
        const updatedItem = {
            title: values.title,
            body: values.body,
        };

        axios
            .put(`http://localhost:5000/posts/${item.id}`, updatedItem)
            .then((response) => {
                dispatch({ type: "UPDATE_ITEM", payload: { ...updatedItem, id: item.id } });
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <Button type="primary" className={"bg-success"} onClick={showModal}>
                Edit
            </Button>
            <Modal
                title="Edit Modal"
                visible={isModalOpen}
                onCancel={handleCancel}
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <Form
                    name="basic"
                    initialValues={{ title: data.title, body: data.body }}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            { message: "Please enter the full title" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Body"
                        name="body"
                        rules={[
                            { message: "Please enter the full body" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className={"text-end"}>
                        <Button type="primary" onClick={() => getPost()} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default EditModal;
