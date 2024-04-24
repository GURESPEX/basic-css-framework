import { ReactNode } from "react";
import { Flex, Typography } from "antd";

type Props = {
  title: string;
  gap: number;
  children?: ReactNode;
};

const StepContent = ({ title, gap, children }: Props) => {
  return (
    <Flex gap={8} vertical>
      <Typography.Title level={3} style={{ fontWeight: "bold" }}>
        {title} :
      </Typography.Title>
      <Flex gap={gap} vertical>
        {children}
      </Flex>
    </Flex>
  );
};

export default StepContent;
