import FirstStep from "@steps/FirstStep";
import SecondStep from "@steps/SecondStep";
import ThirdStep from "@steps/ThirdStep";
import {
  Typography,
  Flex,
  Steps,
  StepProps,
  Button,
  Row,
  Col,
  Form,
} from "antd";
import { ReactNode, useState } from "react";

interface IContentsExtendStepProps extends StepProps {
  content?: ReactNode;
}

function App() {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState<number>(0);
  const stepItems: IContentsExtendStepProps[] = [
    { content: <FirstStep /> },
    { content: <SecondStep /> },
    { content: <ThirdStep /> },
  ];

  const prev = () => {
    setCurrent((prev) => prev - 1);
  };

  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  const done = () => {
    alert("Done!");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(90deg, purple 0%, pink 50%, blue 100%)",
        }}
      >
        <div
          style={{
            padding: 24,
            borderRadius: 8,
            background: "#fff",
            border: "1px solid #0002",
            width: "100%",
            maxWidth: 275,
          }}
        >
          <Flex vertical>
            <Flex align="center" vertical gap={8}>
              <Typography.Title level={2} style={{ fontWeight: "bold" }}>
                Sign up Form
              </Typography.Title>
              <Steps current={current} items={stepItems} responsive={false} />
            </Flex>
            <Form
              form={form}
              onFinish={() => {
                if (stepItems.length - 1 !== current) {
                  next();
                } else {
                  done();
                }
              }}
              layout="vertical"
            >
              <Flex gap={24} vertical>
                {stepItems[current].content}
                <Form.Item style={{ margin: 0 }}>
                  <Row gutter={8}>
                    {current !== 0 && (
                      <Col span={12}>
                        <Button
                          size="large"
                          type="primary"
                          style={{ background: "#D37140" }}
                          block
                          onClick={prev}
                        >
                          Previous
                        </Button>
                      </Col>
                    )}
                    {current !== stepItems.length - 1 && (
                      <Col span={12}>
                        <Button
                          size="large"
                          type="primary"
                          style={{ background: "#4F40D3" }}
                          block
                          htmlType="submit"
                        >
                          Next
                        </Button>
                      </Col>
                    )}
                    {current === stepItems.length - 1 && (
                      <Col span={12}>
                        <Button
                          size="large"
                          type="primary"
                          style={{ background: "#D3408D" }}
                          block
                          htmlType="submit"
                        >
                          Done
                        </Button>
                      </Col>
                    )}
                  </Row>
                </Form.Item>
              </Flex>
            </Form>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default App;
