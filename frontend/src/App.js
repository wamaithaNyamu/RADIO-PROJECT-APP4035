import Stars from "./Components/Stars";
import Rating from "./Components/Rating";
import SortRating from "./Components/SortRating";
import Playing from "./Components/Playing";
import Song from "./Components/Song";
import "antd/dist/antd.css";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Button, Row, Space, Modal, Steps, Input } from "antd";
import {
  FieldNumberOutlined,
  PlusOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { get, post } from "./utils/requests";
const { Step } = Steps;

function App() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // const data = get("/list");
  // console.log(data);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <Layout>
      <Header></Header>
      <Content style={{ marginLeft: "50px", marginTop: "50px" }}>
        <Space direction="vertical">
          <Playing />
          <Row>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              New
            </Button>
          </Row>
          <Song />
        </Space>
        <Modal
          title="Add new song"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Space direction="vertical">
            <Row style={{ marginBottom: "10px" }}>
              <Steps size="small" current={0}>
                <Step title="Song Title" />
                <Step title="Artist Name" />
                <Step title="Year" />
              </Steps>
            </Row>
            <Row>
              <Input
                placeholder="Song Title"
                prefix={<SoundOutlined />}
                style={{ marginBottom: "5px" }}
              />
              <Input
                placeholder="Artist Name"
                prefix={<UserOutlined />}
                style={{ marginBottom: "5px" }}
              />
              <Input
                placeholder="Year Released"
                prefix={<FieldNumberOutlined />}
              />
            </Row>
          </Space>
        </Modal>
      </Content>
    </Layout>
  );
}

export default App;
