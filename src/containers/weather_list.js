import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderList(cityData) {

        if (!cityData) {
            return
        }

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="blue" units="K" /></td> 
                <td><Chart data={pressures} color="navy" units="hPa" /></td> 
                <td><Chart data={humidities} color="black" units="%" /></td> 
            </tr>
        )
    }

    render() {
        return (
            <table className="mt-5 table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderList)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }
}

export default connect (mapStateToProps)(WeatherList);