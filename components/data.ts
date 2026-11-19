// All copy, prices and photos for the site live here, so it is quick to adapt for a new restaurant.

export const PLACE = {
  name: "Phulkari",
  tagline: "Punjabi Kitchen",
  area: "Khayaban-e-Iqbal, DHA Phase 5, Lahore",
  phoneDisplay: "+92 335 4679492",
  whatsapp: "923354679492",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=DHA+Phase+5+Lahore",
};

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  hero: "1606471191009-63994c53433b",
  karahi: "1596797038530-2c107229654b",
  grill: "1599487488170-d11ec9c172f0",
  tikka: "1626074353765-517a681e40be",
  boti: "1628294895950-9805252327bc",
  biryani: "1589302168068-964664d93dc0",
  naan: "1565557623262-b51c2513a641",
  pulao: "1633945274405-b6c8069047b0",
  hall: "1552566626-52f8b828add9",
};

export type Dish = { name: string; note: string; price: string; full?: string };
export type Course = {
  id: string;
  label: string;
  photo: string;
  photoAlt: string;
  /** Karahis are sold by weight: show a half / full kg switch */
  byWeight?: boolean;
  dishes: Dish[];
};

export const MENU: Course[] = [
  {
    id: "karahi",
    label: "Karahi",
    photo: PHOTOS.karahi,
    photoAlt: "Chicken karahi garnished with coriander in a dark pan",
    byWeight: true,
    dishes: [
      { name: "Chicken karahi", note: "Tomato, green chilli, ginger, cooked in desi ghee", price: "1,950", full: "3,700" },
      { name: "Mutton karahi", note: "Bone-in mutton, slow-cooked until the gravy clings", price: "3,400", full: "6,500" },
      { name: "Namkeen karahi", note: "Peshawari style: salt, pepper and tomato, nothing else", price: "3,600", full: "6,900" },
      { name: "Chicken white karahi", note: "Yoghurt, cream, black pepper and kasuri methi", price: "2,150", full: "4,100" },
    ],
  },
  {
    id: "grill",
    label: "Charcoal grill",
    photo: PHOTOS.grill,
    photoAlt: "Seekh kebabs cooking over charcoal",
    dishes: [
      { name: "Beef seekh kebab", note: "Four skewers, hand-minced, onion and green chilli", price: "1,450" },
      { name: "Chicken tikka", note: "Leg and breast on the bone, overnight marinade", price: "1,250" },
      { name: "Malai boti", note: "Boneless chicken, cream and cardamom", price: "1,550" },
      { name: "Mutton chops", note: "Four chops, raw papaya and roasted spices", price: "2,950" },
      { name: "Fish tikka", note: "Rahu in Lahori masala, served with mint chutney", price: "1,850" },
    ],
  },
  {
    id: "rice",
    label: "Rice & handi",
    photo: PHOTOS.biryani,
    photoAlt: "Plate of chicken biryani with lemon and herbs",
    dishes: [
      { name: "Mutton pulao", note: "Yakhni rice, whole spices, tender mutton", price: "1,950" },
      { name: "Chicken biryani", note: "Layered and sealed, with raita and salad", price: "1,350" },
      { name: "Daal makhani", note: "Black lentils cooked overnight with butter", price: "950" },
      { name: "Saag", note: "Sarson ka saag with white butter. Winter only", price: "1,050" },
    ],
  },
  {
    id: "bread",
    label: "Breads & sweets",
    photo: PHOTOS.naan,
    photoAlt: "Butter naan beside a bowl of curry",
    dishes: [
      { name: "Roghni naan", note: "Sesame and milk glaze, from the tandoor", price: "180" },
      { name: "Garlic naan", note: "Brushed with garlic butter and coriander", price: "220" },
      { name: "Kulfi falooda", note: "Pistachio kulfi, vermicelli, rose syrup", price: "650" },
      { name: "Gajar ka halwa", note: "Slow-cooked carrots, khoya and nuts", price: "750" },
    ],
  },
];

export const FEASTS = [
  {
    name: "Choti dawat",
    serves: "Serves 4",
    price: "11,500",
    includes: ["Chicken karahi, full kg", "Beef seekh kebab", "Daal makhani", "8 roghni naan", "Raita and salad"],
  },
  {
    name: "Bari dawat",
    serves: "Serves 8",
    price: "24,900",
    includes: ["Mutton karahi, full kg", "Chicken tikka and malai boti", "Mutton pulao", "16 naan", "Kulfi falooda for everyone"],
  },
  {
    name: "Shaadi wali dawat",
    serves: "Serves 12",
    price: "38,500",
    includes: ["Two karahis of your choice", "Mixed grill platter", "Mutton pulao and biryani", "24 naan", "Gajar ka halwa"],
  },
];

export const HOURS = [
  { days: "Monday to Thursday", time: "12 pm – 12 am" },
  { days: "Friday", time: "2 pm – 1 am" },
  { days: "Saturday and Sunday", time: "12 pm – 1 am" },
];
