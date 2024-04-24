import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TimesheetTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SmallText = styled.small`
  color: #6c757d;
  font-size: 0.9rem;
`;

const PunchDetails = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e2e4e6;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px 15px;
`;

const PunchDetailsHeading = styled.h6`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PunchDetailsText = styled.p`
  margin: 0;
`;

const PunchInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const PunchHours = styled.div`
  padding: 8px 12px;
  align-items: center;
  background-color: #f9f9f9;
  border: 5px solid #e2e4e6;
  border-radius: 50%;
  display: flex;
  font-size: 18px;
  height: 120px;
  justify-content: center;
  margin: 0 auto;
  width: 120px;
`;

const PunchHoursSpan = styled.span`
  font-weight: bold;
`;

const PunchBtnSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PunchBtn = styled.button`
  background-color: #ff902f;
  border: none;
  border-radius: 50px;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  max-width: 100%;
  padding: 8px 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatsBox = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #e2e4e6;
  border-radius: 4px;
  padding: 5px;
  margin: 0 10px 10px;
  width: 50%;
`;

const StatsBoxHeading = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
`;

const StatsBoxText = styled.h6`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const Card = () => {
    const [punchInTime, setPunchInTime] = useState(null);
    const [punchOutTime, setPunchOutTime] = useState(null);
    const [totalHours, setTotalHours] = useState('0.00');
    const [isPunchedIn, setIsPunchedIn] = useState(false);
    const [liveDateTime, setLiveDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDateTime = new Date().toLocaleString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
            setLiveDateTime(currentDateTime);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handlePunchInOut = () => {
        const currentDate = new Date().toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        if (!isPunchedIn) {
            setPunchInTime(`${currentDate} ${liveDateTime}`);
            setIsPunchedIn(true);
        } else {
            setPunchOutTime(`${currentDate} ${liveDateTime}`);
            setIsPunchedIn(false);

            // Calculate total hours
            const punchIn = new Date(punchInTime);
            const punchOut = new Date(`${currentDate} ${liveDateTime}`);
            const hoursDifference = (punchOut - punchIn) / (1000 * 60 * 60);
            setTotalHours(hoursDifference.toFixed(2));
        }
    };

    return (
        <CardBody>
            <CardTitle>
                <TimesheetTitle>Timesheet</TimesheetTitle>
                <SmallText>{liveDateTime}</SmallText>
            </CardTitle>
            <PunchDetails>
                <PunchDetailsHeading>{isPunchedIn ? "Punch Out at" : "Punch In at"}</PunchDetailsHeading>
                <PunchDetailsText>{isPunchedIn ? punchOutTime : punchInTime}</PunchDetailsText>
            </PunchDetails>
            <PunchInfo>
                <PunchHours>
                    <PunchHoursSpan>{totalHours} hrs</PunchHoursSpan>
                </PunchHours>
            </PunchInfo>
            <PunchBtnSection>
                <PunchBtn onClick={handlePunchInOut}>{!isPunchedIn ? 'Punch In' : 'Punch Out'}</PunchBtn>
            </PunchBtnSection>
            <Statistics>
                <StatsBox>
                    <StatsBoxHeading>Break</StatsBoxHeading>
                    <StatsBoxText>1.21 hrs</StatsBoxText>
                </StatsBox>
                <StatsBox>
                    <StatsBoxHeading>Overtime</StatsBoxHeading>
                    <StatsBoxText>3 hrs</StatsBoxText>
                </StatsBox>
            </Statistics>
        </CardBody>
    );
};

export default Card;
