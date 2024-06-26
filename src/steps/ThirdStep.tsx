import StepContent from "@components/StepContent";
import {
  Checkbox,
  DatePicker,
  Divider,
  Flex,
  Form,
  GetProp,
  Input,
  Radio,
  Switch,
  Typography,
} from "antd";
import { useState } from "react";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const ThirdStep = () => {
  const [gender, setGender] = useState<"male" | "female">();
  const [listedHobbies, setListedHobbies] = useState<CheckboxValueType[]>([]);
  const [otherHobbie, setOtherHobbie] = useState<string>("");
  const [isOtherHobbieChecked, setIsOtherHobbieChecked] =
    useState<boolean>(false);

  const options = ["ดูหนัง", "ฟังเพลง", "เล่นเกมส์"];

  const hobbies = [...listedHobbies, otherHobbie].filter(
    (hobbie) => hobbie !== ""
  );

  console.log(hobbies);

  return (
    <StepContent gap={24} title="Confirm">
      <Form.Item
        style={{ margin: 0 }}
        label="Birth Date"
        name="birthDate"
        rules={[
          {
            required: true,
            message: "Please input your birth date!",
            type: "date",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Flex gap={8}>
        <Flex
          align="center"
          style={{ display: "flex", alignItems: "center", height: 32 }}
        >
          <div
            style={{
              display: "inline-block",
              marginInlineEnd: "4px",
              color: "#ff4d4f",
              fontSize: "14px",
              fontFamily: "SimSun, sans-serif",
              lineHeight: "1",
            }}
          >
            *
          </div>
          <Typography.Text>Gender : </Typography.Text>
        </Flex>
        <Form.Item
          style={{ margin: 0, flex: 1 }}
          name="gender"
          rules={[
            {
              required: true,
              message: "Please input your gender!",
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value={gender}
          >
            <Radio value={"male"}>ชาย</Radio>
            <Radio value={"female"}>หญิง</Radio>
          </Radio.Group>
        </Form.Item>
      </Flex>
      <Form.Item style={{ margin: 0 }} label="งานอดิเรก" name="hobbies">
        <Flex gap={8} vertical>
          <Checkbox
            indeterminate={
              listedHobbies.length > 0 && listedHobbies.length < options.length
            }
            checked={options.length === listedHobbies.length}
            onChange={(e) => {
              setListedHobbies(e.target.checked ? options : []);
            }}
          >
            เลือกทั้งหมด
          </Checkbox>
          <Divider style={{ margin: 0 }} />
          <div>
            <Checkbox.Group
              value={listedHobbies}
              options={options}
              onChange={(hobbie) => {
                setListedHobbies(hobbie);
              }}
            />
            <Flex gap={8} vertical>
              <Checkbox
                checked={isOtherHobbieChecked}
                onChange={() => {
                  setIsOtherHobbieChecked(!isOtherHobbieChecked);
                }}
              >
                อื่น ๆ
              </Checkbox>
              <Input
                value={otherHobbie}
                onChange={(e) => {
                  setOtherHobbie(e.target.value);
                }}
                disabled={!isOtherHobbieChecked}
                placeholder="ระบุ"
              />
            </Flex>
          </div>
        </Flex>
      </Form.Item>
      <Flex align="start" gap={8}>
        <Typography.Text
          style={{ display: "flex", alignItems: "center", height: 32 }}
        >
          ยอมรับเงื่อนไข :{" "}
        </Typography.Text>
        <Form.Item
          style={{ margin: 0, flex: 1 }}
          name="accept"
          rules={[
            {
              validator(_, value) {
                return value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Please accept terms of service!")
                    );
              },
            },
          ]}
        >
          <Switch />
        </Form.Item>
      </Flex>
    </StepContent>
  );
};

export default ThirdStep;
