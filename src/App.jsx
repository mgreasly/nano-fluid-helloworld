import React from "react";
//import { SharedTree } from "@fluidframework/shared-tree";
//import { SchemaFactory } from "@fluidframework/shared-object-schema";
//import { TreeConfiguration } from "@fluidframework/shared-tree";
//import { TinyliciousClient } from "@fluidframework/tinylicious-client";

const DiceCtrl = ({ face }) => {
    const content = String.fromCodePoint(0x267f + face);
    return <div className="dice">{content}</div>
}

const Button = ({ setFace }) => {
    const click = () => { setFace(Math.floor(Math.random() * 6) + 1); }
    return <button className="roll" onClick={click}>Roll</button>;
}

export default () => {
//    const client = new TinyliciousClient();
//    const containerSchema = {
//        initialObjects: { diceTree: SharedTree },
//    };
//    const sf = new SchemaFactory("nano-fluid-helloworld");
//    class Dice extends sf.object("Dice", { value: sf.number }) { };
//    const treeConfiguration = new TreeConfiguration(Dice, () => new Dice({ value: 1 }));

    const [face, setFace] = React.useState(0);
    return (
        <div className="wrapper">
            <DiceCtrl face={face} />
            <Button setFace={setFace} />
        </div>
    )
}
