module ns_neoguo {
    export class MyGame {
        
    	private name:string = "NeoGame";
    	public age:number = 18;
    	info:string;

        constructor(nameValue:string) {
        	this.name = nameValue;
        	this.info = this.name+":"+this.age;
        }

        getInfo(): string {
            return this.info;
        }
    }
    export class MyGame2 extends MyGame{
        getInfo(): string {
            return this.info;
        }
    }
}

var game = new ns_neoguo.MyGame("鲁智深");
game.age = 10;
game.getInfo();