import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'antd'

const Counter:React.FC = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(c => c + 1)
  const decrease = () => setCount(c => c - 1)
  return (
    <Card title="counter">
      <h2>{count}</h2>
      <Row justify='center' align='middle' gutter={{ xs: 8, sm: 16, md: 24}}>
          <Col>
              <Button type='primary' onClick={increase}>increase</Button>
          </Col>
          <Col>
          <Button type='ghost' danger onClick={decrease}>decrease</Button>
          </Col>
      </Row>
    </Card>
  )
}
export {
  Counter
} 