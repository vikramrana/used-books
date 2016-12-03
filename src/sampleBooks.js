const sampleBooks = {
  book1 : {
    name : 'Mobile First Third Edition',
    date : '26th Sept 2016',
    description : "I'm selling this as I've no need for this anymore. It is in pristine condition.",
    bookImage : 'http://craigmod.com/images/journal/coccyx/aba-06.png',
    userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
    username : 'Joe Saldana',
    author: 'Jeffrey Zeldman',
    category: 'Technology',
    price: '30'
  },
  book2 : {
    name : 'Modern Architecture',
    date : '30th Sept 2016',
    description : "Please contact if you want to buy this as soon as possible..",
    bookImage : 'https://s-media-cache-ak0.pinimg.com/564x/40/30/fc/4030fcb4509114d71750ecf21eb7e767.jpg',
    userImage : 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
    username : 'Elliot Mischief',
    author: 'Rainer Frustadt',
    category: 'Architecture',
    price: '20'
  },
  book3 : {
    name : 'Synthetic Biology',
    date : '1st Oct 2016',
    description : 'Nullam mollis id sapien ullamcorper malesuada. Proin fermentum eu lorem in ornare. Vivamus feugiat, elit eu gravida hendrerit, ligula orci blandit orci, non bibendumnibh odio vel lacus.',
    bookImage : 'https://images.tandf.co.uk/common/jackets/amazon/978146656/9781466568471.jpg',
    userImage : 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
    username : 'Stevie Wonder',
    author: 'Darren N. Nesbeth',
    category: 'Biology',
    price: '50'
  },
  book4 : {
    name : 'Responsive Web Design',
    date : '26th Sept 2016',
    description : "I'm selling this as I've no need for this anymore. It is in pristine condition.",
    bookImage : 'http://craigmod.com/images/journal/coccyx/aba-04.png',
    userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
    username : 'Joe Saldana',
    author : 'Jeremy Keith',
    category: 'Technology',
    price: '15'
  },
  book5 : {
    name : 'Riverside Museum',
    date : '30th Sept 2016',
    description : "Please contact if you want to buy this as soon as possible..",
    bookImage : 'https://s-media-cache-ak0.pinimg.com/originals/57/88/4c/57884c45988cc17f22a6978610ab4959.jpg',
    userImage : 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
    username : 'Elliot Mischief',
    author: 'Zaha Hadid',
    category: 'Architecture',
    price: '55'
  },
  book6 : {
    name : 'Deep History',
    date : '1st Oct 2016',
    description : 'Nullam mollis id sapien ullamcorper malesuada. Proin fermentum eu lorem in ornare. Vivamus feugiat, elit eu gravida hendrerit, ligula orci blandit orci, non bibendumnibh odio vel lacus.',
    bookImage : 'https://s-media-cache-ak0.pinimg.com/originals/56/b5/12/56b512b4460c78b5cfe769da2b8e85f8.jpg',
    userImage : 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
    username : 'Stevie Wonder',
    author: 'Andrew Shryock and Daniel Lord Smail',
    category: 'History',
    price: '67'
  },
  book7 : {
    name : 'Modern Architecture in Latin America',
    date : '1st Oct 2016',
    description : 'Nullam mollis id sapien ullamcorper malesuada. Proin fermentum eu lorem in ornare. Vivamus feugiat, elit eu gravida hendrerit, ligula orci blandit orci, non bibendumnibh odio vel lacus.',
    bookImage : 'http://1.bp.blogspot.com/-BqRPYj-HGg8/Vmm2F7Xk82I/AAAAAAAASdU/MKpu49PeFRs/s1600/9780292758650.jpg',
    userImage : 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
    username : 'Stevie Wonder',
    author: 'Luis E. Carranza and Fernando Luiz Lara',
    category: 'Architecture',
    price: '88'
  },
    book8 : {
    name : 'Macbeth',
    date : '14th Oct 2016',
    description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    bookImage : 'http://66.media.tumblr.com/tumblr_lexwl3mbmc1qbplp6o1_1280.jpg',
    userImage : 'http://www.mercabuzz.com/assets/Uploads/random-user-31.jpg',
    username : 'Samantha Jones',
    author: 'William Shakespeare',
    category: 'Literature',
    price: '65'
  },
  book9 : {
    name : 'Management Griffin',
    date : '4th Nov 2016',
    description : 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
    bookImage : 'http://www.askdesign.biz/lightbox/images/portgd-arch/gri0618767959-08.png',
    userImage : 'http://p3.sassabe.me/images/bestfriend.jpg',
    username : 'Tyrion Lannister',
    author: 'Houghton Mifflin',
    category: 'Literature',
    price: '75'
  },
  book10 : {
    name : 'Forensic  and Plant Science',
    date : '21st Sept 2016',
    description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    bookImage : 'http://www.colorado.edu/asmagazine/sites/default/files/styles/hero/public/article-image/bookcover.jpg?itok=HDwWlduC',
    userImage : 'http://www.mercabuzz.com/assets/Uploads/random-user-31.jpg',
    username : 'Jenny Austen',
    author: 'Jane H. Bock',
    category: 'Botany',
    price: '100'
  },
  book11 : {
    name : 'CK-12 Biology Advanced Concepts',
    date : '31st July 2016',
    description : 'Nullam mollis id sapien ullamcorper malesuada. Proin fermentum eu lorem in ornare. Vivamus feugiat, elit eu gravida hendrerit, ligula orci blandit orci, non bibendumnibh odio vel lacus.',
    bookImage : 'https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Aa47130d10f77b6eb6565868a5ce290c14245253d62091835bf2c5c92%2BCOVER_PAGE%2BCOVER_PAGE.1',
    userImage : 'http://www.mercabuzz.com/assets/Uploads/random-user-31.jpg',
    username : 'Jenny Austen',
    author: 'David O Norris',
    category: 'Biology',
    price: '55'
  },
  book12 : {
    name : 'Chemistry Precision and Design 3rd Edition ',
    date : '16th Nov 2016',
    description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    bookImage : 'http://www.abeka.com/BookImages/GeneratedLightbox/182931.jpg',
    userImage : 'https://static.skillshare.com/uploads/users/4108285/user-image-large.png?1811860468',
    username : 'Anand Patel',
    author: 'Luis E. Carranza and Fernando Luiz Lara',
    category: 'Chemistry',
    price: '95'
  },
  book13 : {
    name : 'Particle Physics',
    date : '12th Aug 2016',
    description : 'Nullam mollis id sapien ullamcorper malesuada. Proin fermentum eu lorem in ornare. Vivamus feugiat, elit eu gravida hendrerit, ligula orci blandit orci, non bibendumnibh odio vel lacus.',
    bookImage : 'http://www.saha.ac.in/theory/palashbaran.pal/books/partphys/cover.jpg',
    userImage : 'http://www.mercabuzz.com/assets/Uploads/random-user-31.jpg',
    username : 'Stephanie Wonder',
    author: 'Palash B Pal',
    category: 'Particle Physics',
    price: '60'
  },
  book14 : {
    name : 'College Algebra',
    date : '3rd June 2016',
    description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    bookImage : 'http://www.pearsoncustom.com/ok/osu_math/media/000200010271297525_front.png',
    userImage : 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
    username : 'Kyung J Lee',
    author: 'Ellenbogen',
    category: 'Mathematics',
    price: '75'
  },
  book15 : {
    name : 'Beyond Lean: Simulation in Practice 2nd Edition',
    date : '5th Jan 2016',
    description : 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
    bookImage : 'https://open.umn.edu/opentextbooks/Images/0000BeyLeSiPr.png',
    userImage : 'http://p3.sassabe.me/images/bestfriend.jpg',
    username : 'Jon Snow',
    author: 'Charles R. Standridge, Ph.D.',
    category: 'Mass Communication',
    price: '35'
  },
  book16 : {
    name : 'The History Of Street Art',
    date : '21th Sept 2009',
    description : "Street art is visual art created in public locations, usually unsanctioned artwork executed outside of the context of traditional art venues.",
    bookImage : 'https://marketplace.canva.com/MACBVmkTogs/1/0/thumbnail_large/canva-neon-green-black-and-white-graffiti-art-book-cover-MACBVmkTogs.jpg',
    userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
    username : 'Joe Saldana',
    author: 'Linda Dinno',
    category: 'Art',
    price: '24'
},
book17 : {
  name : 'Designing For Emotion',
  date : '16th Nov 2012',
  description : "Go beyond the basics—functionality, reliability, and usability—and design for humans, not machines.",
  bookImage : 'http://craigmod.com/images/journal/coccyx/aba-05.png',
  userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
  username : 'Joe Saldana',
  author: 'Arron Walter',
  category: 'Design',
  price: '39'
},
book18 : {
  name : 'Creating Your Personal Life Plan',
  date : '24th Dec 2011',
  description : "You can live your life on purpose by creating your own personal life plan.",
  bookImage : 'https://michaelhyatt.com/images/book.cover.2D.006.png',
  userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
  username : 'Joe Saldana',
  author: 'Michael Hyatt',
  category: 'Self Help',
  price: '11'
},
book19 : {
  name : 'The Hobbit',
  date : '21th Sept 1937',
  description : "The story is told in the form of an episodic quest, and most chapters introduce a specific creature or type of creature of Tolkien's geography.",
  bookImage : 'https://s-media-cache-ak0.pinimg.com/originals/3a/88/96/3a88960d85df3563c97d172f3a1f9b76.jpg',
  userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
  username : 'Joe Saldana',
  author: 'J. R. R. Tolkien',
  category: 'Story',
  price: '25'
},
book20 : {
  name : 'Macbeth',
  date : '5th Sept 2000',
  description : "I'm selling this as I've no need for this anymore. It is in pristine condition.",
  bookImage : 'https://s-media-cache-ak0.pinimg.com/564x/be/09/1d/be091ddab71d5e09b391598a290c9fc6.jpg',
  userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
  username : 'Joe Saldana',
  author: 'William Shakespeare',
  category: 'Drama',
  price: '13'
},
book21 : {
  name : 'Adventures of Huckleberry Finn',
  date : '26th Oct 1986',
  description : "I'm selling this as I've no need for this anymore. It is in pristine condition.",
  bookImage : 'https://s-media-cache-ak0.pinimg.com/originals/d8/4a/9a/d84a9a9b018345c7048e76c10dc4dc84.jpg',
  userImage : 'http://semantic-ui.com/images/avatar/small/joe.jpg',
  username : 'Joe Saldana',
  author: 'Mark Twain',
  category: 'Novel',
  price: '26'
}
}

export default sampleBooks
