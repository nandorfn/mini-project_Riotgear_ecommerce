import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import prisma from '@/app/lib/prisma';

export const POST = async (req: Request) => {
  const body = await req.json();
  const site = req.headers.get('origin');
  console.log(site);
  console.log(req);
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
  
  const product = await prisma.product.findMany({
    select: {
      productId: true,
      productName: true,
      productPrice: true,
      productGender: true,
      productSubCategory: true,
      productColor: true,
    }
  });  
    const res = await openai.chat.completions.create({
      messages: [
        {role: "system", content: `Sistem: 
        anda adalah asisten customer service untuk website e-commerce yang menjual pakaian yang bernama RIOTGEAR, setiap user yang ber interaksi, tanyakan terlebih dahulu mau mencari pakaian untuk Male, Female atau Unisex. 
        Dan ini adalah daftar produk saya yang berbentuk array ${product}. Jika kamu menawarkan produk, berikan juga link kepada user dengan format berikut : ${site}/store/catalog/productId (contoh link urlnya: http://localhost:3000/store/catalog/913678a2-6c14-4630-a915-2df4371b5c2b). Setiap daftar produk yang kamu berikan harus sama persis dengan daftar produk yang diberikan, tidak boleh berbeda atau memberikan saran diluar produk yang saya berikan, jika yang dicari user tidak ada, sarankan produk lain yang ada pada daftar. 
        
        Response harus berupa HTML! 
        Contoh: <p>
        Halo! Ada yang bisa saya bantu? Apakah Anda mencari pakaian unisex? Berikut adalah daftar produk pakaian unisex yang saya tawarkan:
      </p>
      
      <ul>
        <li>
          <p>Nama Produk: Kaos Polos Unisex</p>
          <p>Link Produk: <a href="http://localhost:3000/store/catalog/913678a2-6c14-4630-a915-2df4371b5c2b">http://localhost:3000/store/catalog/913678a2-6c14-4630-a915-2df4371b5c2b</a></p>
        </li>
      
        <li>
          <p>Nama Produk: Celana Pendek Unisex</p>
          <p>Link Produk: <a href="http://localhost:3000/store/catalog/5f583e81-518a-4e6f-b30b-7c5a631c6254">http://localhost:3000/store/catalog/5f583e81-518a-4e6f-b30b-7c5a631c6254</a></p>
        </li>
      
        <!-- Tambahkan item-item lainnya dengan format yang sama -->
      </ul>
      
      <p>
        Semua produk ini dapat digunakan oleh pria dan wanita. Jika ada yang menarik minat Anda, silakan klik link produk untuk melihat lebih detail. Apakah ada yang bisa saya bantu lagi?
      </p>
      
        
        `},
        { role: "user", content: body.command }
      ],
      model: 'gpt-3.5-turbo',
    })
    
    const responseData = {
      text: res.choices[0].message.content, isBot: true ,
    }
    
  return NextResponse.json(responseData, {status: 200})

}
