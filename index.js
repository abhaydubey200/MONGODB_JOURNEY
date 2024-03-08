//connectivity code js file to mongodb.......

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/set")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mon: {
        type: Number,
        required: true
    },
    fees: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("set", studentsSchema);

// Insert data......

const createStudent = async () => {
    try {
        const studentsData = [
            { name: "abhay", mon: 7505991639, fees: true },
            { name: "adi", mon: 987654321, fees: false },
            { name: "ram", mon: 123456789, fees: true },
            { name: "sam", mon: 123456780, fees: false },
            { name: "tim", mon: 123456781, fees: true },
            { name: "bob", mon: 123456782, fees: false },
            { name: "max", mon: 123456783, fees: true },
            { name: "kim", mon: 123456784, fees: false },
            { name: "jin", mon: 123456785, fees: true },
            { name: "lyn", mon: 123456786, fees: false },
            { name: "zac", mon: 123456787, fees: true },
            { name: "jay", mon: 123456788, fees: false },
            { name: "jon", mon: 123456789, fees: true },
            { name: "van", mon: 123456781, fees: false },
            { name: "tyr", mon: 123456782, fees: true },
            { name: "kai", mon: 123456783, fees: false },
            { name: "zoe", mon: 123456784, fees: true },
            { name: "amy", mon: 123456785, fees: false },
            { name: "ben", mon: 123456786, fees: true },
            { name: "leo", mon: 123456787, fees: false },
            { name: "eva", mon: 123456788, fees: true },
            { name: "ada", mon: 123456789, fees: false },
            { name: "ivy", mon: 123456781, fees: true },
            { name: "mia", mon: 123456782, fees: false },
        ];

        const studentData = await Product.insertMany(studentsData);
        console.log("Student data inserted successfully:", studentData);
    } catch (error) {
        console.error("Error inserting student data:", error);
    }
};

 createStudent();


// // delete all data....

// // Delete all documents
// const deleteAllStudents = async () => {
//     try {
//         const result = await Product.deleteMany({});
//         console.log("Deleted all documents:", result);
//     } catch (error) {
//         console.error("Error deleting documents:", error);
//     }
// };

// deleteAllStudents();
