module ns_neoguo {
    export class MyGame {
        
    	private name:string = "NeoGame";
    	public age:number = 18;
    	private info:string;

        constructor(nameValue:string) {
        	this.name = nameValue;
        	this.info = this.name+":"+this.age;
        }

        public getInfo(): string {
            return  this.info;
        }
    }
}