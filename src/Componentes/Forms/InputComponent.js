import React from "react";
import { StyledInputs } from "./StyledInputs";
import { UserOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

export default function Inputs({
  type,
  name,
  onChange,
  placeholder,
  value,
}) {
  return (
    <StyledInputs>
       <Space direction="vertical">
       <Input
        prefix={<UserOutlined />}
        size="large"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        
      />
       </Space>
    </StyledInputs>
  );
}
