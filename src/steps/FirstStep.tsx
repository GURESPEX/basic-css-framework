import StepContent from "@components/StepContent";
import { Form, Input } from "antd";

const FirstStep = () => {
  return (
    <StepContent gap={24} title="General">
      <Form.Item
        style={{ margin: 0 }}
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
    </StepContent>
  );
};

export default FirstStep;
