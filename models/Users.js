import mongosse from "mongosse";

const UserSchema = new mongosse.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {},
})