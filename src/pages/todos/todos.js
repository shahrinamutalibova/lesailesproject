import React from 'react';
import { useSelector } from 'react-redux';
import TodoModal from './modal';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import EditModal from "./editmodal"

function Posts() {
    const {todos} = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Todos</h4>
                </div>
                <div className="col-md-6 text-end">
                    <TodoModal />
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {todos &&
                        todos.map((item) => (
                            <div key={item.id} className={'col-md-4'}>
                                <Card title={item.title}>
                                    <p>{item.body}</p>
                                    <div className={'d-flex justify-content-between'}>
                                        <Button
                                            onClick={() =>
                                                dispatch({
                                                    type: 'deletePost',
                                                    payload: item.id,
                                                })
                                            }
                                            type={'primary'}
                                            danger
                                        >
                                            Delete
                                        </Button>
                                        <EditModal item={item} />
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
