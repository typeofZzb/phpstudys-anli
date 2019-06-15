class fileFn {
    constructor(obj) {
        this.file = obj.file;
        this.type = obj.type;
        this.size = obj.size;

    }
    isType() {
        let type = this.file.type.match(/\/(\w+)$/);

        if (type) {
            return this.type.includes(type[1]);
        }



    }
    isSize() {
        let size = this.file.size;
        return this.size * 1024 * 1024 > size
    }
}

export default fileFn;