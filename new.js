const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/set1")
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
        
        const createst4 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst5 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst6 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst7 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst8 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst9 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst10 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst11 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst12 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst13 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst14 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst15 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst16 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst17 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst18 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst19 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst20 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst21 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });
        
        const createst22 = new Product({
            name: "ram",
            mon: 123456789,
            fees: true
        });

        const studentData = await Product.insertMany([createst1, createst2, createst3,createst4,createst5,createst6,createst7,createst8,createst9,createst10,createst11,createst12,createst13,createst14,createst15,createst16,createst17,createst18,createst19,createst20,createst21,createst22]);
        console.log("Student data inserted successfully:", studentData);
    } catch (error) {
        console.error("Error inserting student data:", error);
    }
};

createStudent();