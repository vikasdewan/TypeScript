"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //complex calculation
        return 30;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, brust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    getSepia() {
        console.log('Sepia filter is applied');
    }
}
const vikas = new Instagram("front", "Sepia", 29);
vikas.getReelTime();
