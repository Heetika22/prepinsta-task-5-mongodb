const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentdb')
.then(() => console.log('database connected successfully'))
.catch((e) => console.log('not connected', e))

const AcademicSchema= new mongoose.Schema({
    studentID: Number,
    name: String,
    grades: String,
    subjects: Array
})

const CoCurricularSchema= new mongoose.Schema({
    studentID: Number,
    name: String,
    activityType: String,
    duration: String,
    achievements: String
})

const AcademicRecord= new mongoose.model('AcademicRecord', AcademicSchema)
const CoCurricularRecord = new mongoose.model('CoCurricularRecord', CoCurricularSchema)

//Create

// const student1A= new AcademicRecord({
//     studentID: 101,
//     name: 'Heetika',
//     grades: 'O',
//     subjects: ['CN','OS','DB','AWP']
// })
// student1A.save();

// for Academic Records
// const createDocument = async () => {
//     try {
//     	const allData = await AcademicRecord.create([
//         	{
//                 studentID: 102,
//                 name: 'Tanish',
//                 grades: 'B',
//                 subjects: ['CN','OS','DB','AWP']
//          	},
//             {
//                 studentID: 103,
//                 name: 'Snehal',
//                 grades: 'A',
//                 subjects: ['CN','OS','DB','AWP']
//          	},
//             {
//                 studentID: 104,
//                 name: 'Tanay',
//                 grades: 'A',
//                 subjects: ['CN','OS','DB','AWP']
//          	},
//      	])
//  	}
//  	catch(e){
//      	console.log('error');
//  	}
// }
// createDocument();


//Read
// AcademicRecord.deleteOne();

// const getDocument=async()=>{

//     const result=await AcademicRecord.find();
// 	console.log(result);
// }
// getDocument();

//for Co-Curricular Activities
const createDocument = async () => {
    try {
    	const allData = await CoCurricularRecord.create([
        	{
                studentID: 101,
                name: "Heetika",
                activityType: "Debate",
                duration: '2 years',
                achievements: '2nd'
         	},
            {
                studentID: 102,
                name: 'Tanish',
                activityType: "Badminton",
                duration: '5 years',
                achievements: '1st'
         	},
            {
                studentID: 103,
                name: 'Snehal',
                activityType: "Running",
                duration: '3 years',
                achievements: '1st'
         	},
             {
                studentID: 104,
                name: 'Tanay',
                activityType: "Volleyball",
                duration: '2 years',
                achievements: '3rd'
         	},
     	])
 	}
 	catch(e){
     	console.log(e);
 	}
}
createDocument();


const getDocument=async()=>{

    const result=await CoCurricularRecord.find();
    console.log("Co-Curricular Records");
	console.log(result);
}
getDocument();

// Update 
AcademicRecord.updateOne({ studentID: 101 }, { $set: { grades: 'A+' } })
    .then(() => {
        console.log("Document updated successfully");
    })
    .catch(err => {
        console.log(err);
    });


// Delete 
CoCurricularRecord.deleteOne({ studentID: 101 })
    .then(() => {
        console.log("Document deleted successfully");
    })
    .catch(err => {
        console.log(err);
    });
