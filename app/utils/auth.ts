import { jwtVerify } from 'jose';
import { JwtSchema } from './types';

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if(!secret || secret.length === 0) {
    throw new Error('The environment variable JWT_SECRET_KEY is not set');
  }
  
  return secret;
}

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
    
    return verified.payload as JwtSchema;
  } catch (e) {
    throw new Error('Your token isnt valid');
  }
}

