import {Plate, Bottle, Cork, Neck, Body, Label, LabelShadow, Glass, Bowl, CorkSide, Wine, Stem, Foot } from './styles/loading'

export default function Loading () {
    return(
        <Plate> 
            <Bottle>
                <Cork/>
                <Neck/>
                <Body>
                    <Label/>
                    <LabelShadow/>
                </Body>
            </Bottle>
            <CorkSide/>
            <Glass>
                <Bowl>
                    <Wine/>
                </Bowl>
                <Stem/>
                <Foot/>
            </Glass>
        </Plate>
    )
}