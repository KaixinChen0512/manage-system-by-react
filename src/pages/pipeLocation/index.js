import React from 'react';
import Tencent from './Tencent';
import { Row, Col, Card } from 'antd';

export default () => (
    <div>
        <Row gutter={16}>
            <Col md={24}>
                <div style={{height: 500}}>
                    <Card bordered={false} title="管道分布">
                        <Tencent />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
)