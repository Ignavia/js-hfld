import React from "react";
import {Tabs, Tab} from "react-bootstrap";

import {setInformationPanel} from "../../../actions/actions.js";
import GraphDataPanel        from "./graphDataPanel/GraphDataPanel.jsx";
import LiteralsPanel         from "./literalsPanel/LiteralsPanel.jsx";

export default function (props) {
    return (
        <Tabs defaultActiveKey={props.config.informationPanel} onSelect={setInformationPanel} id="type">
            <Tab eventKey="literals" title="Literals">
                <LiteralsPanel
                    shrinkNodeValues={props.config.shrinkNodeValues}
                    rdf={props.rdf}
                    selection={props.selection}
                />
            </Tab>
            <Tab eventKey="graphData" title="Graph Data">
                <GraphDataPanel
                    shrinkNodeValues={props.config.shrinkNodeValues}
                    rdf={props.rdf}
                    graph={props.graph}
                    selection={props.selection}
                />
            </Tab>
        </Tabs>
    );
}