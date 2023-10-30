import { FaqItem, productFormState } from "../utils/types";

export const heroContent = {
  title: 'Unleash Your Street Style with Our New Collection',
  desc: 'Shop our Latest Collection and Discover the Hottest Streetwear Styles of the Season - Find Your Must-Have Pieces and Fresh Looks Now, Before They’re Gone!'
}

export const about = [
  {
    content: "Welcome to RIOTGEAR, where fashion meets rebellion in the heart of the urban landscape. Born from a passion for self-expression and a love for street culture, RIOTGEAR is more than just clothing; it&apos;s a statement of defiance and individuality. Our journey began on the gritty streets, and we&apos;ve since evolved into a global force, uniting skaters, artists, and rebels of all kinds under one banner.",
  },
  {
    content: "At RIOTGEAR, we believe that fashion is a canvas for personal stories. Our designs are a fusion of raw energy and artistic expression, drawing inspiration from the pulse of the city and the spirit of subcultures. Each piece in our collection is crafted with precision and an unwavering commitment to quality. From graphic tees that speak volumes to comfortable yet stylish skatewear, RIOTGEAR is your armor of choice for conquering the concrete jungle."
  },
  {
    content: "But RIOTGEAR is more than just a clothing brand; it's a community. We're a tribe of individuals who refuse to conform to the norm, who skate to the beat of their own drum, and who wear their rebellion proudly. Our mission is to empower you to be unapologetically yourself. Join us in this riotous journey, and lets make a mark on the world, one fearless step at a time."
  }
]

export const faq: FaqItem[] = [
  {
    id: 1,
    q: 'Is RIOTGEAR exclusively for skateboarders?',
    a: 'Not at all! RIOTGEAR is designed for anyone who appreciates bold and stylish streetwear. While we draw inspiration from skateboard culture, our collections are suitable for individuals of all backgrounds looking to express themselves through clothing.'
  },
  {
    id: 2,
    q: 'How should I care for my RIOTGEAR clothing to keep it looking good?',
    a: 'We recommend washing RIOTGEAR clothing in cold water and avoiding harsh bleach. Proper care will help maintain the quality of our garments. Be sure to also avoid excessive heat when drying.'
  },
  {
    id: 3,
    q: 'How can I become a part of the RIOTGEAR community?',
    a: 'You can join the RIOTGEAR community by following us on our social media platforms and participating in events, contests, and collaborations that we organize. We also welcome art or design contributions from our fans.'
  },
  {
    id: 4,
    q: 'Does RIOTGEAR have physical stores?',
    a: 'Currently, RIOTGEAR is available exclusively online through our website. However, we regularly participate in pop-up events and collaborate with select stores worldwide.'
  },
  {
    id: 5,
    q: 'How can I contact the RIOTGEAR team for further inquiries?',
    a: 'You can reach us through the "Contact Us" page on our website or by emailing us at [contact email address]. Our team is ready to answer any questions and provide the assistance you need.'
  }
]

export const headTableProduct = ['No', 'Product Name', 'Main Category', 'Sub Category', 'Color', 'Size', 'Stock', 'Price', 'Action']
export const headTableArticle = ['No', 'Title', 'Author', 'Total Views']


export type category = {
  key: string;
  value: string;
}
export const mainCategory = [
  { id: 1, label: 'Choose', value: '' },
  { id: 2, label: 'Top', value: 'top' },
  { id: 3, label: 'Outwear', value: 'outwear' },
  { id: 4, label: 'Bottom', value: 'bottom' },
  { id: 5, label: 'Accessories', value: 'accessories' },
  { id: 6, label: 'Shoes', value: 'shoes' },
];
export const subCategory = [
  { id: 0, type: '', label: 'Choose', value: '' },
  // Top
  { id: 2, type:'top', label: 'T-Shirt', value: 't-shirt' },
  { id: 3, type:'top', label: 'Shirt', value: 'shirt' },
  { id: 4, type:'top', label: 'Oversize T-Shirt', value: 'oversize' },
  // Outwear
  { id: 6, type:'outwear', label: 'Jacket', value: 'jacket' },
  { id: 7, type:'outwear', label: 'Sweater', value: 'sweater' },
  { id: 8, type:'outwear', label: 'Blazzer', value: 'blazzer' },
  // Bottom
  { id: 10, type: 'bottom', label: 'Jeans', value: 'jeans' },
  { id: 11, type: 'bottom', label: 'Ripped Jeans', value: 'ripped-jeans' },
  { id: 12, type: 'bottom', label: 'Ankle Pants', value: 'ankle-pants' },
  { id: 13, type: 'bottom', label: 'Chino', value: 'chino' },
  { id: 14, type: 'bottom', label: 'Wide Pants', value: 'wide-pants' },
  { id: 15, type: 'bottom', label: 'Casual Pants', value: 'casual-pants' },
  // Accessories
  { id: 21, type: 'accessories', label: 'Bags', value: 'bags' },
  { id: 22, type: 'accessories', label: 'Scarves', value: 'scarves' },
  { id: 23, type: 'accessories', label: 'Gloves', value: 'gloves' },
  { id: 24, type: 'accessories', label: 'Hats', value: 'hats' },
];
export const subCategoryOption = [
  { id: 0, type: '', label: 'Choose', value: '' },
  // Top
  { id: 1, type: 'top', label: 'Choose', value: '' },
  { id: 2, type:'top', label: 'T-Shirt', value: 't-shirt' },
  { id: 3, type:'top', label: 'Shirt', value: 'shirt' },
  { id: 4, type:'top', label: 'Oversize T-Shirt', value: 'oversize' },
  // Outwear
  
  { id: 5, type:'outwear', label: 'Choose', value: '' },
  { id: 6, type:'outwear', label: 'Jacket', value: 'jacket' },
  { id: 7, type:'outwear', label: 'Sweater', value: 'sweater' },
  { id: 8, type:'outwear', label: 'Blazzer', value: 'blazzer' },
  // Bottom
  { id: 9, type:'bottom', label: 'Choose', value: '' },
  { id: 10, type: 'bottom', label: 'Jeans', value: 'jeans' },
  { id: 11, type: 'bottom', label: 'Ripped Jeans', value: 'ripped-jeans' },
  { id: 12, type: 'bottom', label: 'Ankle Pants', value: 'ankle-pants' },
  { id: 13, type: 'bottom', label: 'Chino', value: 'chino' },
  { id: 14, type: 'bottom', label: 'Wide Pants', value: 'wide-pants' },
  { id: 15, type: 'bottom', label: 'Casual Pants', value: 'casual-pants' },
  // Sneaker
  { id: 6, type:'shoes', label: 'Choose', value: '' },
  { id: 17, type:'shoes', label: 'Skate Shoes', value: 'skate-shoes' },
  { id: 18, type:'shoes', label: 'Sneaker', value: 'sneaker' },
  { id: 19, type:'shoes', label: 'Running Shoes', value: 'running-shoes' },
  // Accessories
  { id: 20, type:'accessories', label: 'Choose', value: '' },
  { id: 21, type: 'accessories', label: 'Bags', value: 'bags' },
  { id: 22, type: 'accessories', label: 'Scarves', value: 'scarves' },
  { id: 23, type: 'accessories', label: 'Gloves', value: 'gloves' },
  { id: 24, type: 'accessories', label: 'Hats', value: 'hats' },
  { id: 25, type: 'accessories', label: 'Belts', value: 'belt' },
  
];

export const genderCategory = [
  { id: 1, label: 'Choose', value: '' },
  { id: 2, label: 'Male', value: 'male' },
  { id: 3, label: 'Female', value: 'female' },
  { id: 4, label: 'Unisex', value: 'unisex' },
];
export const featuredOption = [
  { id: 1, label: 'Choose', value: 0 },
  { id: 2, label: 'Active', value: 1 },
  { id: 3, label: 'Inactive', value: 0 },
]
export const colorCategory = [
  { id: 1, label: 'Choose', value: '' },
  { id: 2, label: 'Black', value: 'black' },
  { id: 3, label: 'Grey', value: 'grey' },
  { id: 4, label: 'White', value: 'white' },
  { id: 5, label: 'Red', value: 'red' },
  { id: 6, label: 'Green', value: 'green' },
  { id: 7, label: 'Blue', value: 'blue' },
  { id: 8, label: 'Yellow', value: 'yellow' },
  { id: 9, label: 'Orange', value: 'orange' },
  { id: 10, label: 'Brown', value: 'brown' },
];
export const sortByOptions = [
  { id: 0, label: 'Choose', value: '' },
  { id: 1, label: 'New Release', value: '1' },
  { id: 2, label: 'Popular', value: '2' },
  { id: 3, label: 'Low to High', value: '3' },
  { id: 4, label: 'High to Low', value: '4' },
  { id: 5, label: 'Top Rated', value: '5' },
];
export const sizeCategory = [
  { id: 0, label: 'Choose', value: '' },
  { id: 1, label: 'S', value: 's' },
  { id: 2, label: 'M', value: 'm' },
  { id: 3, label: 'L', value: 'l' },
  { id: 4, label: 'XL', value: 'xl' },
  { id: 5, label: 'XXL', value: 'xxl' },
  { id: 6, label: '3XL', value: '3xl' },
];

export const sizeChart = [
  { id: 1, label: 'S', value: 's' },
  { id: 2, label: 'M', value: 'm' },
  { id: 3, label: 'L', value: 'l' },
  { id: 4, label: 'XL', value: 'xl' },
  { id: 5, label: 'XXL', value: 'xxl' },
  { id: 6, label: '3XL', value: '3xl' },
];
export const navLink = [
  { id: 1, label: 'RIOTGEAR', value: '/' },
  { id: 2, label: 'Store', value: '/store' },
];
export const quantityData = [
  { id: 1, label: '1', value: 1 },
  { id: 2, label: '2', value: 2 },
  { id: 3, label: '3', value: 3 },
  { id: 4, label: '4', value: 4 },
  { id: 5, label: '5', value: 5 },
  { id: 6, label: '6', value: 6 },
];
export const paymentOption = [
  { id: 3, label: 'Direct Bank Transfer', value: 'tf' },
];
export type categoryOption = {
  id: number,
  label: string,
  value: string | number,
}
export type checkboxOptionType = {
  name: string,
  value: string,
  label: string
}
export const genderOption: checkboxOptionType[] = [
  { name: 'gender', value: 'male', label: 'Male' },
  { name: 'gender', value: 'female', label: 'Female' },
  { name: 'gender', value: 'unisex', label: 'Unisex' },
]
export const priceRange: checkboxOptionType[] = [
  { name: 'priceRanges', value: '0-100000', label: 'Under Rp99.000' },
  { name: 'priceRanges', value: '100000-299000', label: 'Rp100.000 - Rp299.000' },
  { name: 'priceRanges', value: '200000-399000', label: 'Rp200.000 - Rp399.000' },
  { name: 'priceRanges', value: '400000-599000', label: 'Rp400.000 - Rp599.000' },
  { name: 'priceRanges', value: '600000-799000', label: 'Rp600.000 - Rp799.000' },
  { name: 'priceRanges', value: '800000-5000000', label: 'Rp800.000 +' }
]


export const featuredTableHead = ['No', 'Product Name', 'Main Category', 'Sub Category', 'Views']
export const columnFeaturedPrdouct = [
  { label: "productName" },
  { label: "productMainCategory" },
  { label: "productSubCategory" },
  { label: "viewsCount" },
]

export const statusOptions = [
  { value: '', label: 'All Orders' },
  { value: 'Ordered', label: 'Ordered' },
  { value: 'InProgress', label: 'In Progress' },
  { value: 'Shipped', label: 'Shipped' },
  { value: 'Delivered', label: 'Delivered' },
  { value: 'Cancelled', label: 'Cancelled' },
  { value: 'Completed', label: 'Completed' },
];

export const defaultProductData = {
  productName: '',
  productMainCategory: '',
  productSubCategory: '',
  productImgLink: '',
  productSize: '',
  productColor: '',
  productGender: '',
  productStock: '',
  productDesc: '',
  productPrice: '',
  featured: 0,
};


export const createProductData = (form: productFormState) => {
  const productStock = parseInt(form.productStock);
  const productPrice = parseFloat(form.productPrice);

  return {
    productName: form.productName,
    productMainCategory: form.productMainCategory,
    productSubCategory: form.productSubCategory,
    productImgLink: form.productImgLink,
    productSize: form.productSize,
    productGender: form.productGender,
    productColor: form.productColor,
    productStock: productStock,
    productDesc: form.productDesc,
    productPrice: productPrice,
    featured: form.featured !== 1,
  };
};

type StatusStyles = Record<string, { className: string; text: string }>;

export const statusStyles: StatusStyles = {
  Ordered: {
    className: "bg-base-100 ",
    text: "Ordered",
  },
  InProgress: {
    className: "bg-yellow-200 text-warning ",
    text: "In Progress",
  },
  Shipped: {
    className: "bg-green-200 text-green-700 ",
    text: "Shipped",
  },
  Delivered: {
    className: "bg-blue-200 text-blue-700 ",
    text: "Delivered",
  },
  Cancelled: {
    className: "bg-red-200 text-red-700 ",
    text: "Cancelled",
  },
  Completed: {
    className: "bg-green-200 text-green-700 ",
    text: "Completed",
  },
};