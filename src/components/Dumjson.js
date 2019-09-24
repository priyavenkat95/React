import React, { Component } from 'react';
import data from "../../src/data.json";
import './Dumjson.css';
import Timer from '../components/Timer';

class Dumjson extends Component {
    constructor() {
        super();
        this.state = {
            data
        }
    }

    render() {
        return (
            <div className="overalljson">
                <div className="card jsonCard">
                    <div>
                        <h2>Pending Trades</h2>
                    </div>
                    <div className="data">
                        <table className="tableData">
                            <thead>
                                <tr>
                                <th>AssetClass</th>
                                <th>CurrentValue</th>
                                <th>CurrentPercent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((value, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{value.assetClass}</td>
                                            <td>{value.currentValue}</td>
                                            <td>{value.currentPercent}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card timer-card">
                <Timer />
                </div>
            </div>
        );
    }
}

export default Dumjson;

