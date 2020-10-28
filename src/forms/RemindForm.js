import React, { Component } from 'react';
import * as Icon from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';

class RemindForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actualTime: new Date().getHours() + ":" + new Date().getMinutes(),
            time: new Date().getHours() + ":" + new Date().getMinutes(),
            day: '',
            date: ''
        };
    }

    addZero(number) {
        return number < 10 ? '0' + number : number;
    }

    formatStringDate(date, days) {
        var dateToFormat = new Date(date);
        dateToFormat.setDate(dateToFormat.getDate() + days);
        return dateToFormat.getFullYear() + "-" + this.addZero(dateToFormat.getMonth() + 1) + "-" + this.addZero(dateToFormat.getDate());
    }

    getDateUsingTodayDate() {
        const { date, day } = this.state;
        var today = new Date();

        var remindDate = '';
        switch (day) {
            case "today":
                remindDate = this.formatStringDate(today, 0);
                break;
            case "tommorow":
                remindDate = this.formatStringDate(today, 1);
                break;
            case "dayAfterTommorow":
                remindDate = this.formatStringDate(today, 2);
                break;
            case "nextWeek":
                remindDate = this.formatStringDate(today, 7);
                break;
            case "":
                remindDate = date;
                break;
            default:
                remindDate = date;
                break;
        }
        return remindDate;
    }

    onChange(e, day) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value,
            day: day
        });
    }

    render() {
        const { onClose, index, remindNote } = this.props;
        const { actualTime } = this.state;
        return (
            <div className="alertForm">
                <span className="closeButton">
                    <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()} />
                </span>
                <div className="importantInfoInAlert">
                    <Icon.Bell size={60} color="#999900" className="item" />
                    Remind:
            </div>
                <div>
                    <div className="remindOption">
                        <span>Today at:</span>
                        <span className="remindTime">
                            <input type="time" defaultValue={actualTime} id="time" onChange={(e) => this.onChange(e, "today")} />
                        </span>
                    </div>
                    <div className="remindOption">
                        <span>Tommorow at:</span>
                        <span className="remindTime">
                            <input type="time" defaultValue={actualTime} id="time" onChange={(e) => this.onChange(e, "tommorow")} />
                        </span>
                    </div>
                    <div className="remindOption">
                        <span>Day after tommorow at:</span>
                        <span className="remindTime">
                            <input type="time" defaultValue={actualTime} id="time" onChange={(e) => this.onChange(e, "dayAfterTommorow")} />
                        </span>
                    </div>
                    <div className="remindOption">
                        <span>Next week at:</span>
                        <span className="remindTime">
                            <input type="time" defaultValue={actualTime} id="time" onChange={(e) => this.onChange(e, "nextWeek")} />
                        </span>
                    </div>
                    <div className="remindOption">
                        <span><input type="date" id="date" onChange={(e) => this.onChange(e, "")} /> at:</span>
                        <span className="remindTime" >
                            <input type="time" defaultValue={actualTime} id="time" onChange={(e) => this.onChange(e, "")} />
                        </span>
                    </div>

                    <div className="noteRemindButton">
                        <Button variant="primary" onClick={() => remindNote(index, this.getDateUsingTodayDate(), this.state.time)}>Save</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default RemindForm;
