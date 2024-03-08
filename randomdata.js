// filter function query in mongodb...
/* 


1=>*******Comparison Operators: These operators are used to compare values in documents.....*******
// 1..$eq: Matches values that are equal to a specified value.....true
// 2..$ne: Matches values that are not equal to a specified value.....true
// 3..$gt: Matches values that are greater than a specified value.... true
// 4..$gte: Matches values that are greater than or equal to a specified value....true
// 5..$lt: Matches values that are less than a specified value....true
// 6..$lte: Matches values that are less than or equal to a specified value.
-------db.collection.find({ field: { $eq: value } })-------



2=>*******Logical Operators: These operators perform logical operations on expressions......*******
1..$and: Joins query clauses with a logical AND.....
2..$or: Joins query clauses with a logical OR......
3..$not: Inverts the effect of a query expression......
4..$nor: Joins query clauses with a logical NOR.....
-------db.collection.find({ $or: [{ field1: value1 }, { field2: value2 }] })-------




3=>*******Element Operators: These operators evaluate the presence of a field or value in a document.......*******
1..$exists: Matches documents that have the specified field......
2..$type: Selects documents if a field is of the specified type......
------db.collection.find({ field: { $exists: true } })-------



4=>*******Array Operators: These operators evaluate arrays......*******
1..$elemMatch: Selects documents if the array field contains at least one element that matches all the specified criteria......
2..$size: Selects documents if the array field is a specified size.....
------db.collection.find({ field: { $elemMatch: { subfield: value } } })-------



5=>*******Evaluation Operators: These operators perform evaluation.........*******
1..$expr: Allows the use of aggregation expressions within the query language.
2..$regex: Selects documents where values match a specified regular expression.
------db.collection.find({ field: { $regex: /pattern/ } })-------

*/



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
        //console.log("Student data inserted successfully:", studentData);
        /*  
        1=> $gt...
        //Query students with mon greater than 5000000000.....
        const filteredStudents = await Product.find({ mon: { $gt: 5000000000 } });
        console.log("Filtered students:", filteredStudents);
        */
       /*
       2=>$eq....
       // Query students with mon equal to a specified value ....
        const filteredStudents = await Product.find({ mon: { $eq: 7505991639 } });
        console.log("Filtered students:", filteredStudents);
        */
       /*
        3=> $ne....
        //Query students where mon is not equal to a specified value (e.g., 7505991639)
        const studentsWithDifferentMon = await Product.find({ mon: { $ne: 7505991639 } });
        console.log("Students with mon not equal to specified value:", studentsWithDifferentMon);
        */
       /*
       4=>$gte...
       // Query students where name is greater than or equal to a specified value (e.g., Abhay)
       const studentsWithMonGTE = await Product.find({ name: { $gte: 'Abhay' } });
       console.log("Students with name greater than or equal to specified value:", studentsWithMonGTE);
       */
      /*
      5=>$ne...
        // Query students where fees is true
        const studentsWithFeesTrue = await Product.find({ fees: { $eq: true } });
        console.log("Students with fees equal to true:", studentsWithFeesTrue);

        // Query students where fees is false
        const studentsWithFeesFalse = await Product.find({ fees: { $ne: true } });
        console.log("Students with fees not equal to true:", studentsWithFeesFalse)
        */
        /*
        6=>$lte...
        // Query students where date is less than or equal to a specified date (e.g., now)
        const currentDate = new Date(); // Current date
        const studentsWithDateLTE = await Product.find({ date: { $lte: currentDate } });
        console.log("Students with date less than or equal to current date:", studentsWithDateLTE);
        */
    } catch (error) {
        console.error("Error inserting student data:", error);
    }
};

createStudents();
