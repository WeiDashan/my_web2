class SingleListener{
    private static names: string[] = []
    private static types: string[] = []
    public static push(type: string,name: string):boolean{
        for (let index=0;index<this.names.length;index++){
            if (this.names[index]==name){
                return false;
            }
        }
        this.names.push(name)
        this.types.push(type)
        return true
    }
    public static remove(type: string,name: string){
        for (let index=0;index<this.names.length;index++){
            if (this.names[index]==name){
                this.names.splice(index,1)
                this.types.splice(index,1)
                return true
            }
        }
        return false
    }
}
export default SingleListener