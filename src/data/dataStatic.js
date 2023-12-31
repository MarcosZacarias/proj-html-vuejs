const mainDataLayout = {
  jumbotron: [
    {
      bgImg: "../../public/img/layout/h3-rev-img-1.png",
      img: "../../public/img/layout/h3-rev-img-2.png",
    },
    {
      bgImg: "../../public/img/layout/h3-rev-img-3.png",
      img: "../../public/img/layout/h3-rev-img-4.png",
    },
    {
      bgImg: "../../public/img/layout/h3-rev-img-5.png",
      img: "../../public/img/layout/h3-rev-img-6.png",
    },
  ],
  cardsImages: [
    {
      imgPath: "../../public/img/layout/h3-img-1.jpg",
    },
    {
      imgPath: "../../public/img/layout/h3-img-2.jpg",
    },
    {
      imgPath: "../../public/img/layout/h3-img-3.jpg",
    },
    {
      imgPath: "../../public/img/layout/h3-img-4.jpg",
    },
  ],
  testimonials: {
    bgImg: "../../public/img/layout/h3-testimonials-bckgrnd.jpg",
    img: "../../public/img/layout/h3-rev-img-2.png",

    quotes: [
      {
        quote:
          "Forget the trendy pizza shops, this hidden spot makes the best new York-Style Pizza slice in Naples",
        source: "Washington Post 2018",
        quoteIcon: ["fas", "quote-left"],
      },
    ],
  },

  listOfferts: [
    {
      title: "Specials*",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus magnam veniam libero, dolore temporibus.",
      offerts: [
        {
          price: "10",
          name: "combo piccolo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus magnam veniam libero, dolore temporibus.",
        },
        {
          price: "20",
          name: "combo mezzo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus magnam veniam libero, dolore temporibus.",
        },
        {
          price: "30",
          name: "combo grande",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus magnam veniam libero, dolore temporibus.",
        },
      ],
    },
  ],

  imgAllScreen: {
    quote: "Go Ahead and build yuor own pizza we won't judge!",
  },

  cardsPersons: [
    {
      imgPath: "../../public/img/layout/h1-team-1a-700x700.jpg",
      dataPerson: {
        name: "Frank Bailey",
        job: "Kitchen Porter",
        socialIcons: ["twitter", "facebook-f", "instagram"],
      },
    },
    {
      imgPath: "../../public/img/layout/h1-team-2a.jpg",
      dataPerson: {
        name: "Frank Bailey",
        job: "Kitchen Porter",
        socialIcons: ["twitter", "facebook-f", "instagram"],
      },
    },
    {
      imgPath: "../../public/img/layout/h1-team-3a.jpg",
      dataPerson: {
        name: "Frank Bailey",
        job: "Kitchen Porter",
        socialIcons: ["twitter", "facebook-f", "instagram"],
      },
    },
    {
      imgPath: "../../public/img/layout/h1-team-4a.jpg",
      dataPerson: {
        name: "Frank Bailey",
        job: "Kitchen Porter",
        socialIcons: ["twitter", "facebook-f", "instagram"],
      },
    },
  ],
  cardsClients: [
    {
      imgPath: "../../public/img/layout/h1-clients-img-1.png",
    },
    {
      imgPath: "../../public/img/layout/h1-clients-img-2.png",
    },
    {
      imgPath: "../../public/img/layout/h1-clients-img-3.png",
    },
    {
      imgPath: "../../public/img/layout/h1-clients-img-4.png",
    },
    {
      imgPath: "../../public/img/layout/h1-clients-img-5.png",
    },
  ],
  product: {
    subtitleProduct: "Choose Your Flavor",
    titleProduct: "The Best Pizza Menu in Town",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam animi architecto eveniet doloribus quod sint?",
    listProducts: [
      {
        img: "../../public/img/layout/h3-product-img-1a-100x100.png",
        name: "Bismarck",
        oldPrice: "50.00",
        price: "30.00",
      },
      {
        img: "../../public/img/layout/h3-product-img-2a-150x150.png",
        name: "Fiori di zucca",
        price: "7.00",
        maxPrice: "50.00",
      },
      {
        img: "../../public/img/layout/h3-product-img-3a-150x150.png",
        name: "Valdostana",
        price: "55.00",
      },
      {
        img: "../../public/img/layout/h3-product-img-4a-150x150.png",
        name: "Pizza Tartufata",
        price: "45.00",
      },
      {
        img: "../../public/img/layout/h3-product-img-5a-150x150.png",
        name: "Francescana",
        price: "25.00",
      },
      {
        img: "../../public/img/layout/h3-product-img-6a-100x100.png",
        name: "Campagnola",
        price: "50.00",
        maxPrice: "95.00",
      },
    ],
  },
  event: {
    title: "Delish Pizza Deals",
    subtitleEvent: "Made with love",
    programEvents: [
      {
        dayEvent: "02",
        monthEvent: "Nov",
        nameEvent: "Traditional Neapolitan Pies in Kyoto Pizza Mercato",
        addressEvent: "204 E. Piazza Tommaso",
        iconAddress: [`fas`, `location-dot`],
      },
      {
        dayEvent: "03",
        monthEvent: "Nov",
        nameEvent: "Terarazza Patio Dining space opening this Weekend",
        addressEvent: "204 E. Piazza Tommaso",
        iconAddress: [`fas`, `location-dot`],
      },
      {
        dayEvent: "05",
        monthEvent: "Nov",
        nameEvent: "Sienna private dining room with stephane Brunn",
        addressEvent: "204 E. Piazza Tommaso",
        iconAddress: [`fas`, `location-dot`],
      },
    ],
  },
  bookTable: {
    persons: {
      minPerson: 1,
      maxPerson: 12,
    },
    hours: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  },
};

export { mainDataLayout };
