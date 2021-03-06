import React from "react";

import {Alert} from "react-bootstrap";

import {dequeueAlert} from "../../actions/actions.js";

/**
 * Computes how long the dialog should be visible. This is based in the
 * message length.
 *
 * @param {String} message
 * The message to display.
 *
 * @return {Number}
 * After how many milliseconds the alert should be dismissed.
 */
function getDuration(message) {
    return 2000 + message.length * 50;
}

/**
 * Renders the component.
 *
 * @param {Object} props
 * The props to use.
 *
 * @param {String} type
 * The type of the alert. This is one of "info", "success", "warning" or
 * "danger".
 *
 * @param {String} message
 * The message to display.
 *
 * @param {Function} onDismiss
 * The function to call to dismiss an alert.
 */
export default function ({type, message}) {
    setTimeout(dequeueAlert, getDuration(message));
    return (
        <Alert bsStyle={type} onDismiss={dequeueAlert}>
            <p>{message}</p>
        </Alert>
    );
}