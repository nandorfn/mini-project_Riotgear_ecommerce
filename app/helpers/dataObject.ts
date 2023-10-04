export type FaqItem = {
  id: number;
  q: string;
  a: string;
}

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
  id:3,
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

export const headTableBlog = ['No', 'Article Title', 'Created At', 'Action']
export const headTableProduct = ['No', 'Product Name', 'Main Category', 'Sub Category', 'Size', 'Color', 'Stock', 'Price', 'Action']


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
];
export const subCategory = [
  { id: 1, label: 'Choose', value: '' },
  { id: 2, label: 'T-Shirt', value: 't-shirt' },
  { id: 3, label: 'Shirt', value: 'shirt' },
  { id: 4, label: 'Oversize T-Shirt', value: 'oversize' },
  { id: 5, label: 'Jacket', value: 'jacket' },
  { id: 6, label: 'Sweater', value: 'sweater' },
  { id: 7, label: 'Jeans', value: 'jeans' },
  { id: 8, label: 'Ripped Jeans', value: 'ripped-jeans' },
  { id: 9, label: 'Ankle Pants', value: 'ankle-pants' },
  { id: 10, label: 'Skate Shoes', value: 'skate-shoes' },
  { id: 11, label: 'Sneaker', value: 'sneaker' },
  { id: 12, label: 'Running Shoes', value: 'running-shoes' },
];

export const genderCategory = [
  { id: 1, label: 'Choose', value: '' },
  { id: 2, label: 'Male', value: 'male' },
  { id: 3, label: 'Female', value: 'female' },
  { id: 4, label: 'Unisex', value: 'unisex' },
];
export const featuredOption = [
  { id:1, label: 'Choose', value: 0 },
  { id:2, label: 'Active', value: 1 },
  { id:3, label: 'Inactive', value: 0 },
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
  { name: 'gender', value: 'female', label: 'Female'},
  { name: 'gender', value: 'unisex', label: 'Unisex'},
]
export const priceRange: checkboxOptionType[] = [
  {name: 'priceRanges', value: '0-100000', label: 'Under Rp99.000'},
  {name: 'priceRanges', value: '100000-299000', label: 'Rp100.000 - Rp299.000'},
  {name: 'priceRanges', value: '200000-399000', label: 'Rp200.000 - Rp399.000'},
  {name: 'priceRanges', value: '400000-599000', label: 'Rp400.000 - Rp599.000'},
  {name: 'priceRanges', value: '600000-799000', label: 'Rp600.000 - Rp799.000'},
  {name: 'priceRanges', value: '800000-5000000', label: 'Rp800.000 +'}
]