import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { clear } from "@testing-library/user-event/dist/clear";

var timer = ''

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {time: timer, render: true};

        this.buttonClicked = this.buttonClicked.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.updateTime = this.updateTime.bind(this);

    }

    setTimer(event) {
        timer = event.target.value;
    }

    buttonClicked(event) {
        this.setState({render:false});
        clearInterval(clear);
        this.setState({time: timer});
        clear = setInterval(this.updateTime, 1000);
    }

    updateTime() {
        if (this.state.time > 1) {
            this.setState({time: this.state.time - 1});
        }
        else {
            this.setState({time: "Fertig"});
            this.setState({render: true})
        }
    }

    render() {
        return (
            <>
                {this.state.render&&
                <Grid container style={{marginTop:12}}>
                    <TextField placeholder={"Ganze Zahl eingeben"} type='number' step='1' onChange={this.setTimer}></TextField>
                </Grid>
                }
                <Grid container style={{marginTop:12}}>
                    <Button variant="contained" margin="12" onClick={this.buttonClicked}>Start</Button>
                </Grid>
                <Grid container style={{marginTop:12, fontFamily:'arial'}}>
                    {this.state.time} <br/>
                </Grid>
            </>
        )
    }
}


export default Timer