import React from "react";

export const LoginScreen = () => {
    return (
        <div id="loginBox">

            <div className="row m-3">
                <div className="col-6">
                    <form className="m-1">
                        <input className="form-control" type="email" placeholder="Introduce el email" />
                    </form>
                </div>
            </div>

            <div className="row m-3">
                <div className="col-6">
                    <form className="m-1">
                        <input className="form-control" type="email" placeholder="Introduce la contraseña" />
                    </form>
                </div>
            </div>

        </div>
    )
}