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
import { put, remove } from "../utils/requests";
import Stars from "./Stars";
import Rating from "./Rating";
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Song = ({ list, onPlay }) => {
  const [visible, setVisible] = useState(false);
  const [song, setSong] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [year, setYear] = useState();
  const [genre, setGenre] = useState();

  const showDrawer = (item) => {
    setSong(item);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
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
  const onSave = async () => {
    let payload = {
      title,
      artist,
      genre,
      year,
    };
    const { data } = await put(`/update/${song._id}`, payload);
    if (data.success === true) {
      setVisible(false);
    }
  };
  const onDelete = async (item) => {
    let payload = item._id;
    const { data } = await remove(`/delete/${payload}`);
    if (data.success === true) {
      console.log("deleted");
    }
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
              <a
                key="list-more"
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(item);
                }}
              >
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
                description={
                  <>
                    <span>{item.artist}</span> <br />
                    <span>
                      {item.rating === 0 ? (
                        <Rating id={item._id} />
                      ) : (
                        <Stars value={item.rating} />
                      )}
                    </span>
                  </>
                }
              />
              <div>{item.genre}</div>
              <div style={{ marginLeft: "100px" }}>{item.year}</div>
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
              onChange={handleTitle}
            />
            <DescriptionItem title="Artist" />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder={song?.artist}
              onChange={handleArtist}
            />
            <DescriptionItem title="Genre" />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder={song?.genre}
              onChange={handleGenre}
            />
            <DescriptionItem title="Year" />
            <Input
              type="number"
              style={{ width: "100%" }}
              placeholder={song?.year}
              onChange={handleYear}
            />
            <Divider />
          </Col>
          <Footer>
            <Space>
              {title || artist || genre || year ? (
                <Button type="primary" onClick={onSave}>
                  Save
                </Button>
              ) : (
                <Button type="primary" disabled>
                  Save
                </Button>
              )}
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
