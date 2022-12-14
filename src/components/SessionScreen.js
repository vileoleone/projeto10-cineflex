import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";

export default function SessionScreen({ ListSuccess, ListSuccessSet }) {
    const [info, setInfo] = useState({})
    const { idMovie } = useParams()
    let { days } = info;
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        promisse.then(resp => {
            setInfo(resp.data);
        })

        promisse.catch((erro) => {

            console.log(erro.response.data)
        })
    }, [idMovie])

    if (days === undefined) {
        return <img src="loading.gif" alt="Requisição errada" />;
    }
    return (
        
        <Schedule data-identifier="session-date">
            <h2> Selecione o horário</h2>
            {days.map((i, index) => {
                return (
                    <SessionHour  key={index} onClick={() => {ListSuccessSet({ ...ListSuccess, "weekday": i.weekday,  "date": i.date})}}>
                        <h3>{i.weekday} - {i.date}</h3>
                        <Hourcontainer>
                            {i.showtimes.map((hour, index) => {
                                return (
                                    <Link to={`/sessao/${hour.id}`}>
                                        <Hour data-identifier="hour-minute-btn" key={index}> {hour.name} </Hour>
                                    </Link>

                                )
                            })}
                        </Hourcontainer>
                    </SessionHour>
                )
            })}
        </Schedule>
    )


}

const Schedule = styled.section`
    width: 100%; 
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-size: 25px;
        font-weight: 400;
        align-self: center;
    }
`
const SessionHour = styled.div` 
    display: flex;
    flex-direction: column;

    h3 {
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 5px;
    }
`
const Hourcontainer = styled.span` 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margi-bottom: 10px;
`
const Hour = styled.div` 
    background-color: #E8833A;
    width: 80px;
    height: 40px;
    color : #FFFFFF;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`