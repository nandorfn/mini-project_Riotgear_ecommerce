import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import prisma from '@/app/lib/prisma';

export const POST = async (req: Request) => {
  const body = await req.json();
  const site = req.headers.get('origin');
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
        Anda adalah asisten.
        Ini seluruh data produk = ${product}
        ini adalah url utama website = ${site}
        
        Rule Format Response:
        1. Response yang anda berikan WAJIB berformat markdown!.
        2. Setiap mengirim link, berikan namanya. 
        Contoh:
          1. Nama Produk
          Link : link produknya.
        3. Data produk cukup data yang sudah saya berikan.
        4. Anda adalah seorang pelayan untuk menjual pakaian dari website RIOTGEAR.
        5. Jangan mencari produk dari database atau sistem anda sendiri, cukup data diatas.
        6. Format Link Product = ${site}/store/catalog/e7369d70-3380-4a18-8011-d2ba4d01ba9f *Note: ini hanya contoh
        7. Metode pembayaran hanya bisa transfer manual ke Bank BCA.
        8. RIOTGEAR adalah perusahaan clothing asal negara Indonesia.
        9. Setiap pengiriman di kirim dari jasa kurir pribadi bernama RIOT Express, dengan estimasi pengiriman 2-4 hari untuk negara Indonesia, dan 1 bulan untuk manca negara.
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
