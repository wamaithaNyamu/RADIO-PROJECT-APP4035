import { DeleteOutlined } from "@ant-design/icons";
import {
  List,
  Avatar,
  Button,
  Skeleton,
  Row,
  Drawer,
  Col,
  Divider,
  Input,
  Space,
} from "antd";
import { Footer } from "antd/lib/layout/layout";
import { useState } from "react";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Song = ({ list, onPlay }) => {
  const [visible, setVisible] = useState(false);
  const [song, setSong] = useState();

  const showDrawer = (item) => {
    setSong(item);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <List
        bordered
        style={{ width: "90%" }}
        className="song-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                key="list-edit"
                onClick={(e) => {
                  e.preventDefault();
                  showDrawer(item);
                }}
              >
                edit
              </a>,
              <a key="list-more">
                <DeleteOutlined />
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onPlay(item);
                    }}
                  >
                    {item.title}
                  </a>
                }
                description={item.artist}
              />
              <div style={{ marginLeft: "20px" }}>{item.genre}</div>
              <div style={{ marginLeft: "20px" }}>{item.year}</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Drawer width={300} placement="right" closable={false} visible={visible}>
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          Edit Song Details
        </p>
        <Space direction="vertical">
          <Col span={24}>
            <DescriptionItem title="Title" />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder={song?.title}
            />
            <DescriptionItem title="Artist" />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder={song?.artist}
            />
            <DescriptionItem title="Genre" />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder={song?.genre}
            />
            <DescriptionItem title="Year" />
            <Input
              type="number"
              style={{ width: "100%" }}
              placeholder={song?.year}
            />
            <Divider />
          </Col>
          <Footer>
            <Space>
              <Button type="primary">Save</Button>
              <Button type="secondary" onClick={onClose}>
                Cancel
              </Button>
            </Space>
          </Footer>
        </Space>
      </Drawer>
    </>
  );
};

export default Song;
