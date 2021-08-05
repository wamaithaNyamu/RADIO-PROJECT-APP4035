import Playing from "./Components/Playing";
import Song from "./Components/Song";
import "antd/dist/antd.css";
import "./App.css";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { Button, Row, Space, Modal, Steps, Input, Tabs, Spin } from "antd";
import { StickyContainer, Sticky } from "react-sticky";
import {
  FieldNumberOutlined,
  FireOutlined,
  PlusOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { get, post } from "./utils/requests";
const { Step } = Steps;
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
);

const initData = async (setter) => {
  const { data } = await get("/list");
  setter(data.data);
};

function App() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [playing, setPlaying] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [year, setYear] = useState();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState();
  const [genre, setGenre] = useState();

  useEffect(() => {
    initData(setData);
    setPlaying(data ? data[0] : '' )
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    let payload = {
      title,
      artist,
      genre,
      year,
    };
    const { data } = await post("/create", payload);
    if (data.success === true) {
      setVisible(false);
      setConfirmLoading(false);
    }
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const showNowPlaying = (song) => {
    setPlaying(song);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleArtist = (e) => {
    setArtist(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const fiveStars = data?.filter((el) => el.rating === 5);
  if (!data)
    return (
      <Spin
        tip="Loading"
        style={{ marginTop: "25%", marginLeft: "45%" }}
      ></Spin>
    );
  return (
    <Layout>
      <Header></Header>
      <Content style={{ marginLeft: "100px", marginTop: "50px" }}>
        <Space direction="vertical">
          <Row>
            <Playing song={playing} />
          </Row>
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              New
            </Button>
          </Row>
          <Row>
            <StickyContainer style={{ width: "100%", height: "auto" }}>
              <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                <TabPane tab="All Songs" key="1" style={{ height: "auto" }}>
                  <Song list={data} onPlay={showNowPlaying} />
                </TabPane>
                <TabPane tab="Five Stars" key="2" style={{ height: "auto" }}>
                  <Song list={fiveStars} onPlay={showNowPlaying} />
                </TabPane>
              </Tabs>
            </StickyContainer>
          </Row>
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
              <Steps size="small" current={index}>
                <Step title="Song Title" />
                <Step title="Artist Name" />
                <Step title="Genre" />
                <Step title="Year" />
              </Steps>
            </Row>
            <Row>
              <Input
                placeholder="Song Title"
                prefix={<SoundOutlined />}
                style={{ marginBottom: "5px" }}
                onChange={handleTitle}
                onBlur={() => {
                  if (title) setIndex(1);
                }}
              />
              <Input
                placeholder="Artist Name"
                prefix={<UserOutlined />}
                style={{ marginBottom: "5px" }}
                onChange={handleArtist}
                onBlur={() => {
                  if (artist) setIndex(2);
                }}
              />
              <Input
                placeholder="Genre"
                prefix={<FireOutlined />}
                type="text"
                onChange={handleGenre}
                onBlur={() => {
                  if (genre) setIndex(3);
                }}
              />
              <Input
                placeholder="Year Released"
                prefix={<FieldNumberOutlined />}
                type="number"
                onChange={handleYear}
                onBlur={() => {
                  if (!year) setIndex(4);
                }}
              />
            </Row>
          </Space>
        </Modal>
      </Content>
    </Layout>
  );
}

export default App;
