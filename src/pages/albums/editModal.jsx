import React, {useState} from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {logger} from "redux-logger/src";

function EditModal({item}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data} = useSelector(state => state.albumReducer)
    console.log(data)
    const dispatch = useDispatch()

    const showModal = () => {
        dispatch({type:"editData", payload:item})
        setIsModalOpen(prev=>!prev)
    }

    const onFinish = (value) => {
        dispatch({type:"editItem", payload:value})
        showModal()
    };


    return (
        <>
            <Button type="primary" className={'bg-success'} onClick={showModal}>
                Edit
            </Button>
            <Modal title="Edit Modal" open={isModalOpen}
                   okButtonProps={{style:{display:'none'}}}
                   cancelButtonProps={{style:{display:'none'}}}
            >
                <Form
                    name="basic"
                    labelCol={{span: 24,}}
                    wrapperCol={{ span: 24,}}
                    style={{ maxWidth: 600,}}
                    initialValues={{ remember: true,}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        initialValue={data.title}
                        label="Title"
                        name="title"
                        rules={[{required: true, message: 'Titleni to\'liq kiriting'},]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        initialValue={data.body}
                        label="Body"
                        name="body"
                        rules={[{required: true, message: 'Bodyni to\'liq kiriting'},]}
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