


const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/randomData")
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

// Function to generate random student data.......
const createRandomStudent = () => {
    const names = ["abhay", "adi", "ram", "sam", "tim", "bob", "max", "kim", "jin", "lyn", "zac", "jay", "jon", "van", "tyr", "kai", "zoe", "amy", "ben", "leo", "eva", "ada", "ivy", "mia"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMon = Math.floor(Math.random() * 10000000000);
    const randomFees = Math.random() < 0.5;
    return { name: randomName, mon: randomMon, fees: randomFees };

}

// Insert 10,000 random students....
const createStudents = async () => {
    try {
        const studentsData = Array.from({ length: 10000 }, createRandomStudent);
        const studentData = await Product.insertMany(studentsData);
    } catch (error) {
        console.error("Error inserting student data:", error);
    }
};

createStudents();
