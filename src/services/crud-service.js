class CrudService{
    constructor(repository){
        this.repository = repository;
    }
    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("at service layer");
            throw {error};
        }
    }
    async destroy(Id){
        try {
            const response = await this.repository.destroy(Id);
            return response;
        } catch (error) {
            console.log("at service layer");
            throw {error};
        }
    }
    async get(Id){
        try {
            const result = await this.repository.get(Id);
            return result;
        } catch (error) {
            console.log("at service layer");
            throw {error};
        }
    }
    async update(Id,data){
        try {
            const response = await this.repository.update(Id,data);
            return response;
        } catch (error) {
            console.log("at service layer");
            throw {error};
        }
    }

    async getAll(){
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("at service layer");
            throw {error};
        }
    }
}

module.exports = CrudService;