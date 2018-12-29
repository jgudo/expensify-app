import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
        //console.log('STARTDATE:', startDate, ' END DATE: ', endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused }));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSelectChange = (e) => {
        if(e.target.value === 'date') {
            this.props.sortByDate();
        } else if(e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" 
                            className="text-input"
                            placeholder="Search Filter"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select onChange={this.onSelectChange} className="select">
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            startDateId="start_date"
                            endDate={this.props.filters.endDate}
                            endDateId="end_date"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={ () => false}
                        />
                    </div>
                </div>
                
                
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))  
});

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);