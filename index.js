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

// Insert data
const createStudent = async () => {
    try {
        const createst1 = new Product({
            name: "abhay",
            mon: 7505991639,
            fees: true
        });

        const createst2 = new Product({
            name: "adi",
            mon: 987654321,
            fees: false
        });

        const createst3 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });

        const studentData = await Product.insertMany([createst1, createst2, createst3]);
        console.log("Student data inserted successfully:", studentData);
    } catch (error) {
        console.error("Error inserting student data:", error);
    }
};

createStudent();
