abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

   abstract getSepia() : void;
   getReelTime() : number {
    //complex calculation
    return 30;
   }
}


class Instagram extends TakePhoto{
    
    constructor(
        public cameraMode : string,
        public filter : string,
        public brust : number
    ){
            super(cameraMode,filter);
    }

    getSepia(): void {
        console.log('Sepia filter is applied');
    }
}

const vikas = new Instagram("front","Sepia",29);

vikas.getReelTime()