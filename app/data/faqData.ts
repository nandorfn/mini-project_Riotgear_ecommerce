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
export const headTableProduct = ['No', 'Product Name', 'Main Category', 'Sub Category', 'Stock', 'Price', 'Action']


export type category = {
  key: string;
  value: string;
}
export const mainCategory = [
  { key: 'Top', value: 'Top' },
  { key: 'Outwear', value: 'Outwear' },
  { key: 'Bottom', value: 'Bottom' },
  { key: 'Accessories', value: 'Accessories' },
];
export const sortByOptions = [
  { key: '', value: 'Choose' },
  { key: '1', value: 'New Release' },
  { key: '2', value: 'Popular' },
  { key: '3', value: 'Low to High' },
  { key: '4', value: 'High to Low' },
  { key: '5', value: 'Top Rated' },
];
export const subCategory = [
  { key: 'T-Shirt', value: 'T-shirt' },
  { key: 'Shirt', value: 'Shirt' },
  { key: 'Oversize T-Shirt', value: 'Oversize T-Shirt' },
  { key: 'Jacket', value: 'Jacket' },
  { key: 'Sweater', value: 'Sweater' },
  { key: 'Jenas', value: 'Jeans' },
  { key: 'Ripped Jeans', value: 'Ripped Jeans' },
  { key: 'Ankle Pants', value: 'Ankle Pants' },
  { key: 'Skate Shoes', value: 'Skate Shoes' },
  { key: 'Sneaker', value: 'Sneaker' },
  { key: 'Running Shoes', value: 'Running Shoes' },
  
];
export type sizeType = {
  key: string,
  value: string,
}
export const sizeChart = [
  { key: 's', value: 'S'},
  { key: 'm', value: 'M'},
  { key: 'l', value: 'L'},
  { key: 'xl', value: 'XL'},
  { key: 'xxl', value: 'XXL'},
  { key: '3xl', value: '3XL'},
];
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
  {name: 'priceRanges', value: '800000-0', label: 'Rp800.000 +'}
]