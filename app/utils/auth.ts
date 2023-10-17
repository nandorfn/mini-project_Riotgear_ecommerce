import { jwtVerify } from 'jose';
import { JwtSchema } from './types';
import { cookies } from 'next/headers';

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if(!secret || secret.length === 0) {
    throw new Error('The environment variable JWT_SECRET_KEY is not set');
  }
  
  return secret;
}

export const verifyAuth = async (token: string) => {
    const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
    
    if (!verified) {
      throw new Error('Your token isnt valid');
    } else {
      return verified.payload as JwtSchema;
    }
  }
export const checkUserLogin = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  const user: JwtSchema | void = token && (await verifyAuth(token.value))
    
  return user;
}

