import React from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {

    state = {
        editMode: false,
        status: this.props.status,
    }


    deactivateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return <>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this. deactivateEditMode}>
                my status : {this.props.status || 'no status'}
            </span>
            </div>
            }
            {this.state.editMode &&
            <div>
            <span>
                <input
                    onChange={this.onStatusChange}
                    onBlur={this. deactivateEditMode} autoFocus value={this.state.status} type="text"/>
            </span>
            </div>
            }

        </>
    }










    /*render() {
        return (<>
            {this.state.editMode
                ? <input
                    onChange={this.onStatusChange}
                    autoFocus
                    onBlur={() => this.deactivateEditMode()}
                    value={this.state.status}
                    // type="text"
                />
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no any status"}</span>
                </div>}
        </>);
    }
*/
}
