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

const data = [
  {
    rating: 0,
    _id: "610a7e2e656f948cc798ff11",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610ae9f41d166ea3444cccc2",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610aea93481f4f2dda003e4c",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610aea97481f4f2dda003e4e",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610aea9a481f4f2dda003e50",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610aea9d481f4f2dda003e52",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610aea9f481f4f2dda003e54",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
  {
    rating: 0,
    _id: "610aeaa2481f4f2dda003e56",
    title: "Hakuna Matata",
    artist: "idk",
    year: 2020,
    art: "google.com",
    __v: 0,
  },
];

function App() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [playing, setPlaying] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [year, setYear] = useState();
  const [index, setIndex] = useState(0);

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
  const showNowPlaying = (song) => {
    setPlaying(song);
  };
  const handleTitle = (entry) => {
    setTitle(entry);
  };
  const handleArtist = (entry) => {
    setArtist(entry);
  };
  const handleYear = (entry) => {
    setYear(entry);
  };
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
            <Song list={data} onPlay={showNowPlaying} />
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
                placeholder="Year Released"
                prefix={<FieldNumberOutlined />}
                type="number"
                onChange={handleYear}
                onBlur={() => {
                  if (!year) setIndex(2);
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
