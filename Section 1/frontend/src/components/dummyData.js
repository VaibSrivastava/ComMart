const shopsData = [
  {
    name: "Manoj General Store",
    image:
      "https://th.bing.com/th/id/R.90bf19f3f47b206a0d092a5e11c5b6ff?rik=EBVvw9xAGmf4AQ&riu=http%3a%2f%2fres.cloudinary.com%2fculturemap-com%2fimage%2fupload%2far_4%3a3%2cc_fill%2cg_faces%3acenter%2cw_1200%2fv1494885748%2fphotos%2f225112_original.jpg&ehk=gfs1e5%2fKPjbPRuMR04HvwSvGiPlCmXcCjuTyGkS4QbA%3d&risl=&pid=ImgRaw&r=0",
    Link: "http://localhost:3000/card1",
    rating: 4.5,
    items: [
      {
        id: 12,
        name: "Fortune Chakki Fresh Atta",
        image:
          "https://m.media-amazon.com/images/I/61AOiVfvtBL._AC_UL480_QL65_.jpg",
          price: 53,
        options: [
          {
            "1kg": 53,
            "5kg": 238,
          },
        ],
        description:
          "Made with superior wheat blend.Traditional Chakki Process. Absorbs water more efficiently to make your rotis soft and fluffy.",
      },
      {
        name: "India Gate Basmati Rice",
        image:
          "https://m.media-amazon.com/images/I/71W1XCVDlML._AC_UL480_FMwebp_QL65_.jpg",
          price: 90,
        options: [
          {
            "1kg": 90,
            "5kg": 449,
          },
        ],
        description:
          "The highest quality harvest of the region is tested, procured, and then sent for aging in the most conducive environment of the company-owned storage facilities.",
      },
      {
        name: "Ahaar Sooji",
        image:
          "https://m.media-amazon.com/images/I/71GxDp8SZ1L._AC_UL480_FMwebp_QL65_.jpg",
          price: 49,
        options: [
          {
            "500 gms": 49,
            "1 kg": 96,
          },
        ],
        description:
          "Finest Quality Rava Suji. Hygienic packaging to ensure nutrition value.High protein semolina for your daily life.",
      },
      {
        name: "FORTUNE Maida Pouch",
        image: "https://m.media-amazon.com/images/I/61tigjW-sHL._SX522_.jpg",
        price: 48,
        options: [
          {
            "500g": 48,
            "1kg": 99,
          },
        ],
        description:
          "Natural taste, flavour and nutrients are intact in FORTUNE maida.Made from mp wheat. Hygienic and untouched by hands ensuring purity.",
      },
    ],
  },
  {
    name: "Jagnath General Store",
    image:"https://content.jdmagicbox.com/comp/gurgaon/u4/011pxx11.xx11.190717145834.k7u4/catalogue/pooja-genral-store-2-gurgaon-06xj213afe.jpg?clr=",
    Link:"http://localhost:3000/card2",
    rating:4.3,
    items: [
      {
          name: "Aashirvaad Atta with Multigrains",
          image: "https://m.media-amazon.com/images/I/91M7LSsv+7L._AC_UL480_QL65_.jpg",
          price: 70,
          options: [
            {
              "1kg": 70,
              "5kg": 349,
            },
          ],
          description:
            "Aashirvaad Atta with Multigrains is high in fibre which aids in digestion.3 rotis made from Multigrain Atta fulfill 35% of your daily fibre requirement.",
        },
        {
          name: "Daawat SehatMini Mogra Rice",
          image: "https://m.media-amazon.com/images/I/81zB6gZk7XL._AC_UL480_FMwebp_QL65_.jpg",
          price: 63,
          options: [
            {
              "1kg": 63,
              "5kg": 314,
            },
          ],
          description: "Daawat Rozana. Country of Origin: India. Morga rice.",
        },
        {
          name: "Ganesh Sooji",
          image: "https://m.media-amazon.com/images/I/51OdTYgx+wL._AC_UL480_FMwebp_QL65_.jpg",
          price: 28,
          options: [
            {
              "500gm": 28,
              "1kg": 56,
            },
          ],
          description:
            "Our Sooji comes from quality wheat grains that ensure perfect taste.Unpolished, high protein, colour sorted, zero impurities.",
        },
        {
          name: "Ganesh Maida",
          image: "https://m.media-amazon.com/images/I/81jqEpL3uxL._SX522_.jpg",
          price: 23,
          options: [
            {
              "500gm": 23,
              "1kg": 46,
            },
          ],
          description:
            "Maida is a white flour from the Indian subcontinent. Finely milled without any bran, refined, and bleached, it closely resembles cake flour ganesh maida is good.",
        },
  ]
  },
  {
    name: "Blossom Bakery",
    image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/08/22/603317-bakery-products-082217.jpg",
    Link:"http://localhost:3000/card3",
    rating:4.8,
    items: [
      {
        name: "Cadbury Chocobakes ChocLayered Cakes",
        image: "https://m.media-amazon.com/images/I/61t0Nqvms+L._AC_UL480_FMwebp_QL65_.jpg",
        options: [
          {
            "1 packet": 45,
          },
        ],
        description:
          "Experience the new exciting Chocobakes chocolate layered cakes – Your loved Cadbury, now inside a chocolate cake.",
      },
      {
        name: "Red Velvet Cake",
        image: "https://yummycake.in/wp-content/uploads/2022/01/classic-red-velvet-cake.jpg",
        price: 799,
        options: [
          {
            "1/2 kg": 799,
            "1 kg": 1399,
          },
        ],
        description:
          "A perfect reddish cake that brings absolute happiness and love to your every celebration mainly on your anniversaries or birthdays of your special people.",
      },
      {
        name: "Black-Forest Cake",
        image: "https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-b2bd2d0/yummycake.in/wp-content/uploads/2021/03/yummy-black-forest-gems-cake-half-kg_1.jpg",
        price: 850,
        options: [
          {
            "1/2 kg": 850,
            "1 kg": 1699,
          },
        ],
        description:
          "No amount of words can perfectly define the beauty and yummy taste of this black forest cake, which git nature and rich chocolate melting right inside your mouth at each bite.",
      },
      {
        name: "Vanilla cake",
        image: "https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-b2bd2d0/yummycake.in/wp-content/uploads/2021/03/vanilla-cake-thumb-800x800.jpg",
        price: 650,
        options: [
          {
            "1/2 kg": 650,
            "1 kg": 1250,
          },
        ],
        description:
          " Vanilla Cake is such a classic flavor that never lost its popularity with other flavors. This flavour is loved by every cake lover due to its delicious aroma and sweet flavour.",
      },
    ],
  },
  {
    name: "Good Bakery",
        image:"https://5.imimg.com/data5/ANDROID/Default/2022/5/CA/VA/BU/105901699/product-jpeg-500x500.jpg",
        Link:"http://localhost:3000/card4",
        rating:4.7,
    items: [
      {
        name: "Strawberry cake",
        image: "https://justbakedcake.com/wp-content/uploads/2020/09/strawberry-gateaux-1-768x512.jpg",
        price: 699,
        options: [
          {
            "1/2 kg": 699,
            "1 kg": 999,
          },
        ],
        description:
          "Strawberry flavours are known for their bright pink and delicious sweet and rich strawberry flavours.",
      },
      {
        name: "Butterscotch Cake",
        image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-classic-butterscotch-cake-1-kg--109216-m.jpg",
        price: 450,
        options: [
          {
            "1/2 kg": 450,
            "1 kg": 995,
            
          },
        ],
        description:
          "Here's another classic flavour to leave you spellbound. This scrumptious butterscotch pastries with its luscious flavour is all set to entice you with its caramel shavings and delicious toppings.",
      },
    ],
  },

];

export default shopsData;
