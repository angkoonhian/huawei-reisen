"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        logger: console,
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3333;
    const options = new swagger_1.DocumentBuilder()
        .setTitle('huawei Reisen backend services')
        .setDescription('API for reisen backend')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.setBaseViewsDir((0, path_1.join)(__dirname, '../../../', 'views'));
    app.setViewEngine('hbs');
    await app.listen(port, () => {
        common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map