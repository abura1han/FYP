import React from "react";
import {Link} from "react-router-dom";

class Error extends React.Component{
    render() {
        return (
            <div className="ErrorPG">
              <p>ERROR 404</p>
              <p>PAGE NOT FOUND</p>
              <Link to="/">back to homepage</Link>
            </div>
        );
    }

}

export default Error;