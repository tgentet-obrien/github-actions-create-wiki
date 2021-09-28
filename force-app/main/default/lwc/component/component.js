import { LightningElement, wire } from "lwc";

/**
 * @class
 * 
 * @description Class Description
 */
export default class Component extends LightningElement {
    /**
     * @description Property used to display the current Time
     * 
     * @return {Object} Date
     */
    get now() {
        return new Date();
    }
}