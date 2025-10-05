import { useState } from 'react';
import { Button, Card, Space, Typography, message } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Meteor } from './meteor-mock';

const { Title, Text } = Typography;

const App = (): JSX.Element => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleIncrement = (): void => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = (): void => {
        setCount((prev) => prev - 1);
    };

    const handleMeteorCall = (): void => {
        setLoading(true);
        Meteor.call('exampleMethod', count, (error: Error | undefined, result: unknown) => {
            setLoading(false);
            if (error) {
                void message.error(
                    `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
                );
            } else {
                void message.success(`Success: ${String(result)}`);
            }
        });
    };

    return (
        <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
            <Card>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Title level={2}>React + Ant Design + Meteor Test Environment</Title>

                    <Card type="inner" title="Counter">
                        <Space size="large" style={{ width: '100%', justifyContent: 'center' }}>
                            <Button
                                type="primary"
                                icon={<MinusOutlined />}
                                onClick={handleDecrement}
                                size="large"
                            />
                            <Text
                                strong
                                style={{ fontSize: '24px', minWidth: '60px', textAlign: 'center' }}
                            >
                                {count}
                            </Text>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                onClick={handleIncrement}
                                size="large"
                            />
                        </Space>
                    </Card>

                    <Button type="default" onClick={handleMeteorCall} loading={loading} block>
                        Test Meteor.call
                    </Button>
                </Space>
            </Card>
        </div>
    );
};

export default App;
