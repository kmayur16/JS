/*
Model a person using javascript object. It can have properties like firstName, lastName, age..
*/
let ravi = {
  firstName: "Ravi",
  lastName: "kumar",
  age: 37,
  address: {
    addressLocality: "Santhekatte",
    addressRegion: "Udupi",
    state: "Karnatka",
    postalCode: 576105,
  },
  email: "ravi@gmail.com",
  jobTitle: "Software Engineer",
  birthDate: "1979-10-12",
  gender: "male",
  telephone: "+91 90000000",
  socialMediaAccounts: [
    "www.facebook.com/ravi1",
    "www.linkedin.com/ravi1",
    "www.twitter.com/ravi1",
  ],
};
/*
Model bank account as a javascript object.
*/
let bankAccount = {
  savings: {
    name: "harry",
    address: "karkala",
    branch: "salmar",
    bankName: "Canara Bank",
    accountNumber: "25xxxxxxxxxxx",
    ifscCode: "XXXX00458",
    micrCode: 017212656,
    interest: "4% to 6%",
  },
  current: {
    name: "Daisy",
    address: "udupi",
    branch: "main road",
    bankName: "Corporation Bank",
    accountNumber: "520xxxxxxx85",
    maturity: "variable",
    overdraft: "yes",
    interest: "Nil",
  },
  Recurring: {
    name: "dia",
    address: "mumbai",
    branch: "panvel",
    accountNumber: "552xxxxxxx55",
    type: "individual/joint",
    interestRate: "5%",
    bankName: "India Post",
    installment: "monthly/Periodic",
  },
};

/*
Model state of your favorite computer game as a javascript object.
*/
let game = {
    name: "Call of Duty",
    genres: "first- person shooter",
    publisher: "activision",
    platform: ["windows", "OSX", "mobiles"],
    mainSeries: ["call of duty 2","call of duty 3", "black ops", "ghosts"],
    Developer : "infinity ward",
    firstRelease: "october 29 2003",
    latestRelease: "october 25 2019",
    freeToPlay : "online",
    media: ["comic books","short films", "films"],

};
/*
Model shopping list as an object. Each item in the list is also an object.
*/
/*
let shopping = {
    user : {
        id: 123,
        name : "mayur",
        email : "m@gmail.com",
        password : "xxxxx",
        address : "car street",
        city : "Karkala",
        zip : 574104,
        state : "Karnataka"
    },
    orders : {
        id: xx,
        status : "placed/cancelled",
        date : "dd-mm-yyyy"
    },
    categories : {
        id : "xxxx",
        name : [
            "mobiles",
            "Electronics",
            "Appliances",
            "Beauty",
            "sports",
            "Fashion"
        ]
    },
    products : {
        id : 01,
        pName : "x",
        brandId : 10,
        model : "x0001",
        price : 1000

    }
};
*/
let shoppingList = {
  flour: {
    brand: "Aashirvaad",
    quantity: "3kg",
    price: 300,
  },
  rice: {
    brand: "India Gate",
    quantity: "1kg",
    price: 319,
  },
  snacks: {
    brand: "unibic",
    quantity: "450gm",
    price: 117,
  },
  "tea & coffee": {
    brand: "Nescafe",
    quantity: "100gm",
    price: 256,
  },
  beverages: {
    brand: "nestea",
    quantity: "200ml",
    price: 25,
  },
  Detergent: {
    brand: "Surf excel",
    quantity: "2kg",
    price: 369,
  },
  soaps: {
    brand: "fiama",
    quantity: "3 * 125 gm",
    price: 165,
  },
};
/*
Model a credit card as a javascript object.
*/
let card = {
    cardBrand= ["VISA", "MASTERCARD", "DISCOVER"],
    creditCartNumber : 4553924685157319,
    expiry: 10/2023,    
    cvv: 295,
    issuer: "INDUSIND BANK, LTD.[India]",
    cardHolderName : "mayur",
    cardType: "VISA"
};
/*
Model a car as a javascript object. 
*/
let car = {
  brand: "Hyundai",
  model: ["santro", "grand i10", "i20", "verna", "xcent", "venue"],
  safety: {
    airbag: "yes",
    fogLamps: "yes",
    smartKey: "no",
    horn: "yes",
  },
  exterior: {
    headLamps: "halogen",
    doorHandles: "chrome-finished",
    alloyWheels: "Diamond-cut",
  },
  interior: {
    color: "Beige & black",
    metalFinish: "yes",
    steering: "Leather wrapped",
  },
  comfort: {
    airConditioning: "Fully automatic",
    powerSteering: "yes",
    wiper: ["rear", "front"],
  },
  infortainment: {
    touchScreen: "ips display",
    speakers: ["front", "rear"],
  },
};

/*
Model a file in computer as javascript object. 
*/
let file = {
    fileName: "task",
    fileFolder: "JS",
    fileType: "file folder",
    location: "C:\Users\mayur\Desktop",
    subFiles: ["hash1", "chess", "fizzbuzz"],
    subFile1: {
        name:"hash1.js",
        size: "201 bytes",
        type: "javascript file"
    },
    subFile2: {
        name:"chess.js",
        size: "254 bytes",
        type: "javascript file"
    },
    subFile3: {
        name:"fizzBuzz.js",
        size: "248 bytes",
        type: "javascript file"
    },
    subFile4 : {
        name:"hash1.html",
        size: "467 bytes",
        type: "html file"
    }

};
/*
 Model a recipe of a dish as an object
 */
let recipe = {
  course: "shahi pulao",
  prepTime: "10 min",
  cookTime: "10 min",
  cuisine: "north-indian",
  servings: 4,
  ingredients: {
    ghee: "4tbsp",
    cashew: "4tbsp",
    raisins: "4tbsp",
    almond: "4tbsp",
    bayLeaf: 2,
    cinnamon: "1-inch",
    cloves: 8,
    onion: 1,
    carrot: "1 chopped",
    potato: "1 chopped",
    turmeric: "1 tbsp",
    redChilli: "1 tbsp",
    cookedRice: "6 cups",
    salt: "2 tbsp",
    lemonJuice: "2 tbsp",
  },
};
/*
Model a book as an object
*/
let book = {
  genres: ["Action", "classics", "comic", "mystery", "fantasy"],
  bookName: "silent patient",
  format: "paper back",
  author: "Alex Michaelides",
  price: 2004,
  pages: 336,
  weight: "522 gm",
  isbn: 1250301696,
  Language: "english",
  bookGenre: "mystery",
  publisher: "Macmillan Publishers",
  awards: "Goodreads Choice Awards Best Mystery & Thriller",
  published: "5 February 2019",
};
/*
Model a restaurant menu as an object
*/
let restaurant = {
    resName: "Happy hour",
    classics: {
        "drip" : 2.50,
        "espresso" : 3.50,
        "americano" : 3.75,
        "latte" : 4.00
    },
    lattes : {
        "mocha" : 5.00,
        "vanilla" : 5.00,
        "caramel" :5.00,
        "matcha": 5.50
    },
    lemonade : {
        "baeberry": 5.00,
        "dirtyBae": 5.00
    },
    toppings: {
        "peanuts" :0.25,
        "oreo": 0.25,
        "fruityPebbels" : 0.25
    },
    doughnuts : {
        "vanillaBean" :2.50,
        "simpson": 2.50,
        "creme" : 3.00
    },
    pasteries: {
        "buttermilkMT" : 4.50,
        "walnut cookie" : 4.50,
        "chocolate": 4.00
    },
};
/* for each of the above draw object diagram with name binding being 
    the tentacle to actual values of the properties.
    You can use https://excalidraw.com
*/
function duplicateSpreadsheet(original) {
  if (original.hasPendingChanges) {
      throw new Error("You need to save the file before you can duplicate it.");
  }
  let copy = {
      created: Date.now(),
      author: original.author,
      cells: original.cells,
      metadata: original.metadata
  };
  copy.metadata.title = "Copy of " + original.metadata.title;

  return copy;
}
