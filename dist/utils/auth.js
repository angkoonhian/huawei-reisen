"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
class authUtil {
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        return hashedPassword;
    }
    checkPassword(inputPassword, originalPassword) {
        return bcrypt.compare(inputPassword, originalPassword);
    }
}
exports.default = authUtil;
//# sourceMappingURL=auth.js.map