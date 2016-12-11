"use strict";

let instance = null;

class Admin {  
    constructor() {
        if(!instance) {
            instance = this;
        }
        
        this.data = { firstName: "Pavel", lastName: "Kastsiuk" };

        return instance;
      }
}

module.exports = Admin;