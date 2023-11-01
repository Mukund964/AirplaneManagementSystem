class crudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("at CrudRepo");
            throw{error};
        }
    }

    async destory(modelId){
        try {
            const result = await this.model.destory(modelId);
            return result;
        } catch (error) {
            console.log("at CrudRepo");
            throw{error};
        }
    }

    async get(modelId){
        try{
            const result = await this.model.findByPk(modelId);
            return result;
        }catch (error) {
            console.log("at CrudRepo");
            throw{error};
        }
    }

    async update(modelId,data){
        try {
            const result = await this.model.update(modelId,data);
            return result;
        } catch (error) {
            console.log("at CrudRepo");
            throw{error};
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("at CrudRepo");
            throw{error};
        }
    }
}

module.exports = crudRepository;