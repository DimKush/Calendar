import React from 'react'
import styled from 'styled-components'

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6,1fr);
`;

const CellWrapper = styled.div`
position: relative;
    min-width: 140px;
    min-height: 80px;
    background-color: ${props =>props.isWeekend ? '#262626' : '#1a1a1a'};
    color: #d4d4d4
`;

const CellFooter = styled.div`
    width: 100%;
    min-height :2px;
    background-color: #121212;
    position: absolute;
    bottom:0px;
    
`;

const RowInCellWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'}
`;

const CurrentDayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const CalendarGrid = ({dateBegin})=>{
    const totalDays = 42;
   
    const day = dateBegin.clone().subtract(1, 'day');
    const daysContainer = [...Array(42)].map(() => day.add(1,'day').clone());
    return (
        <GridWrapper>
            {
            daysContainer.map((dayInstance) => (
                <CellWrapper key={dayInstance.format('MMDDYYYY')} 
                             isWeekend={dayInstance.day() === 6 || dayInstance.day() === 0}>
                    <RowInCellWrapper justifyContent={'flex-end'} >
                        <CurrentDayWrapper>
                            {dayInstance.format('DD')}
                        </CurrentDayWrapper>
                    </RowInCellWrapper>
                <CellFooter></CellFooter>
                </CellWrapper>
                

        ))}
        </GridWrapper>
    );
};


export {CalendarGrid};

