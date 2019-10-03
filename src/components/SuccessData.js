import React, { Component } from 'react';
import './SuccessData.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
class SuccessData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false
        }
    }
    // deletedata = () => {
    //     console.log("deleted");
    //     let arrayData = this.props.name;
    //     arrayData = arrayData.filter((val, id) => {
    //         console.log(arrayData.indexOf(val));
    //         console.log(id);
    //         if (arrayData.indexOf(val) === id)
    //             delete arrayData[arrayData.indexOf(val)];
    //     });
    // }
    showdata = () => {
        this.setState({
            showResults: true,
        });

    }
    componentDidMount() {
        console.log(this.props.name);
    }
    render() {
        const dply_arr = this.props.name.length ? (
            <div className="row rowData">
                {
                    this.props.name.map((post_arr, i) => {
                        return (
                            <div className="card arrDatas col-lg-4" key={i}>
                                <div>
                                    <EditIcon className="editIcon" />
                                    <DeleteIcon className="deleteIcon" onClick={() => this.props.deleteData(post_arr,i)}/>
                                </div>
                                <h3 className="name">Name : <i>{post_arr}</i></h3>
                                {this.state.showResults === true && (<p><i>Job Name <span className="status">{post_arr}</span> applied successfully!!</i></p>)}
                                <button className="applybtn" onClick={this.showdata}>Apply</button>
                            </div>
                        )
                    })
                }
            </div>
        ) : (
                <div>No data</div>
            )
        return (
            <div>
                {dply_arr}
            </div>
        );
    }
}


export default SuccessData;

