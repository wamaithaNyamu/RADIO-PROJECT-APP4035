import { Select, Button, Row} from 'antd';
import {useEffect, useState} from "react";
import axios from "axios";
const { Option  } = Select;

const RateSong = () => {

    const [rate, setRate] = useState(1)
    const [rated,setRated] = useState(false)
    // song id is supposed to come from the songs
    const [songID,setSongID] = useState(1)
    const handleChange = (newRating) => {
        setRate(parseInt(newRating));
        console.log(`selected ${newRating}`);

    }

    const rateSong = async () => {
        setRated(true)
        await axios.post(`api/rate/${songID}`, {rate})

    }

    useEffect(()=>{
        console.log('rated status change')
    },[rated])
    return(
        <Row>

            <Select
                value={rate}
                defaultValue={{ value: '1 star rating' }}
                style={{ width: 120 }}
                onChange={handleChange}
            >
                <Option value="1">1 star rating</Option>
                <Option value="2">2 star rating</Option>
                <Option value="3">3 star rating</Option>
                <Option value="4">4 star rating</Option>
                <Option value="5">5 star rating</Option>
            </Select>

            {!rated &&
            <Button onClick={rateSong}>Rate</Button>
            }


        </Row>
    )
}
export default RateSong