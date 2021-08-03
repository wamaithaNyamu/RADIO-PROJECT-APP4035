import { Button, Row} from 'antd';
import {useEffect, useState} from "react";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from "axios";

import { Empty } from 'antd';
const { Meta } = Card;


const SortRating = () => {

    const [songs, setSongs] = useState([])


    useEffect(async ()=>{
        const {data} =   await axios.get(`api/rating`)
        setSongs(data)

    },[songs])
    return(
        <Row>
            <Button>5 STAR RATING SONGS</Button>

            {songs.length < 0 ? <>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt={songs.title}
                            src={songs.art} />
                    }

                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={songs.title}
                        description={songs.year}
                    />
                </Card>
            </> : <Empty/>}




        </Row>
    )
}

export default SortRating