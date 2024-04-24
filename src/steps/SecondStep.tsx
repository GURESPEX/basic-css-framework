import StepContent from "@components/StepContent";
import { Form, Input } from "antd";

const SecondStep = () => {
  return (
    <StepContent gap={24} title="Contact">
      <Form.Item
        style={{ margin: 0 }}
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
            pattern: /^[0-9]{10}$/,
          },
        ]}
      >
        <Input maxLength={10} />
      </Form.Item>
    </StepContent>
  );
};

export default SecondStep;
