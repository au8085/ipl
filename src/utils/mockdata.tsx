const cskImage = require("../assets/csk.png");
const rcbImage = require("../assets/rcb.jpg");
const rrImage = require("../assets/rr.jpg");
const pbksImage = require("../assets/pbks.jpg");
const gtImage = require("../assets/gt.png");
const kkrImage = require("../assets/kkr.jpg");
const lsgImage = require("../assets/lsg.png");
const srhImage = require("../assets/SRH.jpg");
const dcImage = require("../assets/DC.jpg");
const miImage = require("../assets/mi.jpg");
const banner1 = require("../assets/rcbbanner.jpg");
const banner2 = require("../assets/pbksbanner.png");
const banner3 = require("../assets/gtbanner.png");
const banner4 = require("../assets/rrbanner.png");
const banner5 = require("../assets/lsgbanner.jpeg");
const banner6 = require("../assets/mibanner.jpg");
const banner7 = require("../assets/srhbanner.jpg");
const banner8 = require("../assets/srhbanner.jpg");
const banner9 = require("../assets/srhbanner.jpg");
const banner10 = require("../assets/kkrbanner.jpg");




// const miSong = require("../../public/themesong/mi.mp3");
// const cskSong = require("../../public/themesong/csk.mp3");
// const rcbSong = require("../../public/themesong/rcb.mp3");
// const srhSong = require("../../public/themesong/srh.mp3");
// const lsgSong = require("../../public/themesong/lsg.mp3");
// const kkrSong = require("../../public/themesong/kkr.mp3");
// const dcSong = require("../../public/themesong/dc.mp3");
// const  rrSong = require("../../public/themesong/rr.mp3");
// const pbksSong = require("../../public/themesong/pbks.mp3");
//  const gtSong = require("../../public/themesong/gt.mp3");


export const bannerImages = [
  {
    src: banner1,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
  
    src: banner2,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner3,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner4,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner5,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner6,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner7,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner8,
    alt: 'Banner 1',
    caption: "hello"
  },
  {
    src: banner9,
    alt: 'Banner 1',
    caption: "hello"
  },{
    src: banner10,
    alt: 'Banner 1',
    caption: "hello"
  },
 
 
];

export default bannerImages;


export const teams = [
  { 
    songUrl:"gtSong",
    id:1,
    name: 'Royal Challengers Bangalore', 
    imageUrl: rcbImage,
    members: ['Akash Deep', 'Alzarri Joseph', 'Anuj Rawat', 'Cameron Green', 'Dinesh Karthik', 'Faf du Plessis (C)', 'Glenn Maxwell', 'Himanshu Sharma', 'Karn Sharma', 'Lockie Ferguson', 'Mahipal Lomror', 'Manoj Bhandage', 'Mayank Dagar', 'Mohammed Siraj', 'Rajan Kumar', 'Rajat Patidar', 'Reece Topley', 'Saurav Chauhan', 'Suyash Prabhudessai', 'Swapnil Singh', 'Tom Curran', 'Vijaykumar Vyshak', 'Virat Kohli', 'Will Jacks', 'Yash Dayal'] 
  },
  { 
    
    id:2,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: pbksImage,
    name: 'Punjab Kings', 
    members: ['Arshdeep Singh', 'Ashutosh Sharma', 'Atharva Taide', 'Chris Woakes', 'Harpreet Bhatia', 'Harpreet Brar', 'Harshal Patel', 'Jitesh Sharma', 'Kagiso Rabada', 'Liam Livingstone', 'Matthew Short', 'Nathan Ellis', 'Prabhsimran Singh', 'Prince Choudhary', 'Rahul Chahar', 'Rilee Rossouw', 'Rishi Dhawan', 'Sam Curran', 'Shashank Singh', 'Shikhar Dhawan (C)', 'Shivam Singh', 'Sikandar Raza', 'Tanay Thyagarajann', 'Vidwath Kaverappa', 'Vishwanath Pratap Singh']
  },
  { 
    id:3,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: cskImage,
    name: 'Chennai Super Kings', 
    members: ['Ruturaj Gaikwad', 'MS Dhoni', 'Moeen Ali', 'Deepak Chahar', 'Tushar Deshpande', 'Shivam Dube', 'Rajvardhan Hangargekar', 'Ravindra Jadeja', 'Ajay Mandal', 'Mukesh Choudhary', 'Ajinkya Rahane', 'Shaik Rasheed', 'Mitchell Santner', 'Simarjeet Singh', 'Nishant Sindhu', 'Prashant Solanki', 'Maheesh Theekshana', 'Rachin Ravindra', 'Shardul Thakur', 'Daryl Mitchell', 'Sameer Rizvi', 'Mustafizur Rahman', 'Avanish Rao Aravelly', 'Devon Conway', 'Matheesha Pathirana']
  },
  { id:4,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: srhImage,
    name: 'Sunrisers Hyderabad', 
    members: ['Abdul Samad', 'Abhishek Sharma', 'Aiden Markram (c)', 'Akash Singh', 'Anmolpreet Singh', 'Bhuvneshwar Kumar', 'Fazalhaq Farooqi', 'Glenn Phillips', 'Heinrich Klaasen', 'Jaydev Unadkat', 'Jhathavedh Subramanyan', 'Marco Jansen', 'Mayank Agarwal', 'Mayank Markande', 'Nitish Kumar Reddy', 'Pat Cummins', 'Rahul Tripathi', 'Sanvir Singh', 'Shahbaz Ahmed', 'T. Natarajan', 'Travis Head', 'Umran Malik', 'Upendra Singh Yadav', 'Wanindu Hasaranga', 'Washington Sundar']
  },
  { id:5,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: miImage,
    name: 'Mumbai Indians',
    members: ['Akash Madhwal', 'Anshul Kamboj', 'Arjun Tendulkar', 'Dewald Brevis', 'Gerald Coetzee', 'Hardik Pandya (C)', 'Ishan Kishan', 'Jasprit Bumrah', 'Kumar Kartikeya', 'Luke Wood', 'Mohammad Nabi', 'N Tilak Varma', 'Naman Dhir', 'Nehal Wadhera', 'Nuwan Thushara', 'Piyush Chawla', 'Rohit Sharma', 'Romario Shepherd', 'Shams Mulani', 'Shivalik Sharma', 'Shreyas Gopal', 'Suryakumar Yadav', 'Tim David', 'Vishnu Vinod']
  },
  { id:6,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: rrImage,
    name: 'Rajasthan Royals', 
    members: ['Abid Mushtaq', 'Tanush Kotian', 'Avesh Khan', 'Dhruv Jurel', 'Donovan Ferreira', 'Jos Buttler', 'Kuldeep Sen', 'Kunal Rathore', 'Nandre Burger', 'Navdeep Saini', 'Ravichandran Ashwin', 'Riyan Parag', 'Rovman Powell', 'Sandeep Sharma', 'Sanju Samson (C)', 'Shimron Hetmyer', 'Shubham Dubey', 'Tom Kohler-Cadmore', 'Trent Boult', 'Yashasvi Jaiswal', 'Yuzvendra Chahal']
  },
  { 
    id:7,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: dcImage,
    name: 'Delhi Capitals', 
    members: ['Abishek Porel', 'Anrich Nortje', 'Axar Patel', 'David Warner', 'Ishant Sharma', 'Jake Fraser-McGurk', 'Jhye Richardson', 'Khaleel Ahmed', 'Kuldeep Yadav', 'Kumar Kushagra', 'Lalit Yadav', 'Mitchell Marsh', 'Mukesh Kumar', 'Pravin Dubey', 'Prithvi Shaw', 'Rasikh Dar', 'Ricky Bhui', 'Rishabh Pant (C)', 'Shai Hope', 'Sumit Kumar', 'Swastik Chhikara', 'Tristan Stubbs', 'Vicky Ostwal', 'Yash Dhull']
  },
  { 
    id:8,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: gtImage,
    name: 'Gujarat Titans.', 
    members: ['Abhinav Manohar', 'Azmatullah Omarzai', 'B Sai Sudharsan', 'Darshan Nalkande', 'David Miller', 'Jayant Yadav', 'Joshua Little', 'Kane Williamson', 'Kartik Tyagi', 'Manav Suthar', 'Matthew Wade', 'Mohit Sharma', 'Noor Ahmad', 'Rahul Tewatia', 'Rashid Khan', 'Sai Kishore', 'Shahrukh Khan', 'Shubman Gill (C)', 'Spencer Johnson', 'Sushant Mishra', 'Umesh Yadav', 'Vijay Shankar', 'Wriddhiman Saha', 'B R Sharath']
  },
  { 
    id:9,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: kkrImage,
    name: 'Kolkata Knight Riders', 
    members: ['Andre Russell', 'Angkrish Raghuvanshi', 'Anukul Roy', 'Chetan Sakariya', 'Dushmantha Chameera', 'Harshit Rana', 'KS Bharat', 'Manish Pandey', 'Mitchell Starc', 'Mujeeb Ur Rahman', 'Nitish Rana', 'Phil Salt', 'Rahmanullah Gurbaz', 'Ramandeep Singh', 'Rinku Singh', 'Sakib Hussain', 'Sherfane Rutherford', 'Shreyas Iyer (C)', 'Sunil Narine', 'Suyash Sharma', 'Vaibhav Arora', 'Varun Chakaravarthy', 'Venkatesh Iyer']
  },
  { 
    
    id:10,
    songUrl:"../../public/themesong/gt.mp3",
    imageUrl: lsgImage,
    name: 'Lucknow Super Giants', 
    members: ['Amit Mishra', 'Arshin Kulkarni', 'Ashton Turner', 'Ayush Badoni', 'David Willey', 'Deepak Hooda', 'Devdutt Padikkal', 'K Gowtham', 'K L Rahul (C)', 'Krunal Pandya', 'Kyle Mayers', 'M Siddharth', 'Marcus Stoinis', 'Mayank Yadav', 'Mohd. Arshad Khan', 'Mohsin Khan', 'Naveen-ul-Haq', 'Nicholas Pooran', 'Prerak Mankad', 'Quinton de Kock', 'Ravi Bishnoi', 'Shamar Joseph', 'Shivam Mavi', 'Yash Thakur', 'Yudhvir Singh']
  }
];
