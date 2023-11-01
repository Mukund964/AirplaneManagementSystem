// flight validation middleware
const {clientSideErrorCodes} = require('../utils/ErrorCodes')
const validateCreateFlight = (req,res,next) => {
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.ArrivalTime ||
        !req.body.DepartureTime ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.Price)
        {
            res.status(clientSideErrorCodes.BAD_REQUEST).json(
                {
                    data:{},
                    message:"Invalid Request Type",
                    status : false, 
                    error: "Missing required fields"
                }
            )

            
        }
        next();
}
module.exports={
    validateCreateFlight
};