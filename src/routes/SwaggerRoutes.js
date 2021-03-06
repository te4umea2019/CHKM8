/**
 * Route file for Swagger Json generation.
 */
class SwaggerRoutes {
    /**
     * Constructs the needed swagger json
     * @param {Server} server 
     */
    constructor(server) {
        const SWAGGER_CONTROLLER = new (require('../controllers/SwaggerController'))();
        
        /**
         * @swagger
         *
         * /docs/swagger.json:
         *   get:
         *     description: Get the Swagger json file
         *     produces:
         *       - application/json
         *     parameters:
         *     tags:
         *       - docs
         *     responses:
         *       200:
         *         description: Json file containing OpenAPI compliant Api routes
         */
        server.app.get('/docs/swagger.json', async (req, res) => {
            SWAGGER_CONTROLLER.fetch(
                req,
                res
            );
        });
    }
}

module.exports = SwaggerRoutes;
