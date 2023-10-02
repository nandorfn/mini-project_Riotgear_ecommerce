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
export const sortBy = [
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
  
]
export const sizeChart = ["S", "M", "L", "XL", "XXL", "3XL"];
export type genderOptionType = {
  name: string;
  value: string;
};
export const genderOption: genderOptionType[] = [
  { name: 'Male', value: 'Male' },
  { name: 'Female', value: 'Female' },
  { name: 'Unisex', value: 'Unisex' },

]