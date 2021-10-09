import React from "react";

class CampsiteInfo extends React.Component {
    render() {
        if (this.props.campsite) {
            return (
                <div className="row">

                </div>
            );
        }
        return <div />;
    }
}

export default CampsiteInfo;