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
1..$and: Joins query clauses with a logical AND.....true
2..$or: Joins query clauses with a logical OR......true
3..$not: Inverts the effect of a query expression......true
4..$nor: Joins query clauses with a logical NOR.....true
-------db.collection.find({ $or: [{ field1: value1 }, { field2: value2 }] })-------




3=>*******Element Operators: These operators evaluate the presence of a field or value in a document.......*******
1..$exists: Matches documents that have the specified field......true
2..$type: Selects documents if a field is of the specified type......true
------db.collection.find({ field: { $exists: true } })-------



4=>*******Array Operators: These operators evaluate arrays......*******
1..$elemMatch: Selects documents if the array field contains at least one element that matches all the specified criteria......true
2..$size: Selects documents if the array field is a specified size.....true
------db.collection.find({ field: { $elemMatch: { subfield: value } } })-------



5=>*******Evaluation Operators: These operators perform evaluation.........*******
1..$expr: Allows the use of aggregation expressions within the query language....true
2..$regex: Selects documents where values match a specified regular expression.....true
------db.collection.find({ field: { $regex: /pattern/ } })-------



1..counting query.....
2..sorting query.....
*/






const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/COMPLETE_DATA")
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
    email: {
        type: String,
        required: true
    },
    subjects: [String], // Array of subjects
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("set", studentsSchema);

const createRandomStudent = () => {
    const names = ["abhay", "adi", "ram", "sam", "tim", "bob", "max", "kim", "jin", "lyn", "zac", "jay", "jon", "van", "tyr", "kai", "zoe", "amy", "ben", "leo", "eva", "ada", "ivy", "mia"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMon = Math.floor(Math.random() * 10000000000);
    const randomFees = Math.random() < 0.5;
    const randomEmail = `${randomName.toLowerCase()}@example.com`; // Generate random email using student's name
    const subjects = ["Math", "Science", "English", "History", "Art"]; // Define possible subjects
    const randomSubjects = []; // Initialize an empty array for subjects
    const numSubjects = Math.floor(Math.random() * subjects.length) + 1; // Random number of subjects (1 to total subjects)
    for (let i = 0; i < numSubjects; i++) {
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)]; // Choose a random subject
        randomSubjects.push(randomSubject); // Add the subject to the array
    }
    return { name: randomName, mon: randomMon, fees: randomFees, email: randomEmail, subjects: randomSubjects };
}

const createStudents = async () => {
    try {
        const studentsData = Array.from({ length: 10000 }, createRandomStudent);
        const studentData = await Product.insertMany(studentsData);
        console.log("Student data inserted successfully:", studentData);



        
       
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
        /*
        1=>$and...
         // Query students where fees is true and mon is less than 5000000000
         const studentsWithFeesTrueAndMonLT = await Product.find({ $and: [{ fees: true }, { mon: { $lt: 5000000000 } }] });
         console.log("Students with fees true and mon less than 5000000000:", studentsWithFeesTrueAndMonLT);
        */
        /*
        2=>$or...
        // Query students where fees is true or mon is less than 5000000000
        const studentsWithFeesTrueOrMonLT = await Product.find({ $or: [{ fees: true }, { mon: { $lt: 5000000000 } }] });
        console.log("Students with fees true or mon less than 5000000000:", studentsWithFeesTrueOrMonLT);
        */
        /*
       3=> $not...
                // Query students where fees is not true
                const studentsWithFeesNotTrue = await Product.find({ fees: { $not: { $eq: true } } });
                console.log("Students with fees not true:", studentsWithFeesNotTrue);
        */
        /*
         4=>$nor...
         // Query students where fees is false and mon is greater than or equal to 5000000000, OR where fees is true and mon is less than 5000000000
         const studentsWithNorCondition = await Product.find({
             $nor: [
                 { $and: [{ fees: false }, { mon: { $gte: 5000000000 } }] }, // fees is false and mon is greater than or equal to 5000000000
                 { $and: [{ fees: true }, { mon: { $lt: 5000000000 } }] } // fees is true and mon is less than 5000000000
             ]
         });
         */
         /*
         1=>$exists..
        // Query students where address field exists
         const studentsWithAddressExists = await Product.find({ name: { $exists: true } });
        console.log("Students with address field exists:", studentsWithAddressExists);
         2=>$type...
        // Query students where mon field is of type Number
        const studentsWithMonTypeNumber = await Product.find({ mon: { $type: "number" } });
        console.log("Students with mon field type as Number:", studentsWithMonTypeNumber);
        */
       /*
       1=>$elemMatch...
        // Query students where at least one subject is "Math" and "Science"
        const studentsWithMathAndScience = await Product.find({ subjects: { $elemMatch: { $in: ["Math", "Science"] } } });
        console.log("Students with at least one subject as 'Math' and 'Science':", studentsWithMathAndScience);
         2=>$regex...
        // Query students where email starts with "a" and ends with ".com"
        const studentsWithEmailRegex = await Product.find({ email: { $regex: /^b.*\.com$/ } });
        console.log("Students with email starting with 'a' and ending with '.com':", studentsWithEmailRegex);
         */
        /*
        1=>$expr...
        // Query using $expr
        const studentsWithFourCharacterNames = await Product.find({ $expr: { $eq: [{ $strLenCP: "$name" }, 4] } });
        console.log("Students with names of four characters:", studentsWithFourCharacterNames);
        2=>$size...
        // Query using $size
          */
       

        const studentsWithFiveSubjects = await Product.find({ subjects: { $size: 5 } });
        console.log("Students with five subjects:", studentsWithFiveSubjects);
      
         
    } catch (error) {
        console.error("Error inserting student data:", error);
    }
};

createStudents();
