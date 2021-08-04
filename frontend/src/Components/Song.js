import { List, Avatar, Button, Skeleton, Row } from "antd";

const Song = ({ list }) => {
  return (
    <List
      className="song-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-edit">edit</a>, <a key="list-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="#">{item.name.title}</a>}
              description={item.name.artist}
            />
            <div>{item.name.year}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default Song;
