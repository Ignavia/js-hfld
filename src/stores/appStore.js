import {MapStore} from "flux/utils";

import dispatcher from "../dispatcher/dispatcher.js";

class AppStore extends MapStore {
    constructor(dispatcher) {
        super(dispatcher);

        this._state = this._state
            .set("viewport", "graphical")
            .set("permanentMenubar", true)
            .set("permanentLeftSidebar", false)
            .set("permanentRightSidebar", false);
    }

    toggle(state, key) {
        return state.set(key, !this.get(key));
    }

    reduce(state, action) {
        switch (action.type) {
        case "CHANGE_VIEWPORT":
            return state.set("viewport", action.viewport);
        case "TOGGLE_PERMANENT_MENUBAR":
            return this.toggle(state, "permanentMenubar");
        case "TOGGLE_PERMANENT_LEFT_SIDEBAR":
            return this.toggle(state, "permanentLeftSidebar");
        case "TOGGLE_PERMANENT_RIGHT_SIDEBAR":
            return this.toggle(state, "permanentRightSidebar");
        default:
            return state;
        }
    }
}

export default new AppStore(dispatcher);
