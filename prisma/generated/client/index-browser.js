
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  productName: 'productName',
  productMainCategory: 'productMainCategory',
  productSubCategory: 'productSubCategory',
  productImgLink: 'productImgLink',
  productSize: 'productSize',
  productGender: 'productGender',
  productColor: 'productColor',
  productStock: 'productStock',
  productDesc: 'productDesc',
  productPrice: 'productPrice',
  viewsCount: 'viewsCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  featured: 'featured'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  email: 'email',
  password: 'password',
  salt: 'salt',
  avatar: 'avatar',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  paymentMethod: 'paymentMethod',
  status: 'status'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  orderId: 'orderId',
  name: 'name',
  phone: 'phone',
  email: 'email',
  country: 'country',
  city: 'city',
  district: 'district',
  address: 'address',
  zip: 'zip',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  text: 'text',
  rating: 'rating',
  productId: 'productId',
  orderId: 'orderId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ArticleScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  author: 'author',
  userId: 'userId',
  thumbnail: 'thumbnail',
  viewsCount: 'viewsCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.ProductOrderByRelevanceFieldEnum = {
  productId: 'productId',
  productName: 'productName',
  productMainCategory: 'productMainCategory',
  productSubCategory: 'productSubCategory',
  productImgLink: 'productImgLink',
  productSize: 'productSize',
  productGender: 'productGender',
  productColor: 'productColor',
  productDesc: 'productDesc'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  userId: 'userId',
  name: 'name',
  email: 'email',
  password: 'password',
  salt: 'salt',
  avatar: 'avatar',
  role: 'role'
};

exports.Prisma.CartOrderByRelevanceFieldEnum = {
  userId: 'userId',
  productId: 'productId'
};

exports.Prisma.OrderOrderByRelevanceFieldEnum = {
  orderId: 'orderId',
  userId: 'userId',
  paymentMethod: 'paymentMethod'
};

exports.Prisma.AddressOrderByRelevanceFieldEnum = {
  userId: 'userId',
  orderId: 'orderId',
  name: 'name',
  phone: 'phone',
  email: 'email',
  country: 'country',
  city: 'city',
  district: 'district',
  address: 'address',
  zip: 'zip'
};

exports.Prisma.OrderItemOrderByRelevanceFieldEnum = {
  orderId: 'orderId',
  productId: 'productId'
};

exports.Prisma.ReviewOrderByRelevanceFieldEnum = {
  text: 'text',
  productId: 'productId',
  orderId: 'orderId',
  userId: 'userId'
};

exports.Prisma.ArticleOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content',
  author: 'author',
  userId: 'userId',
  thumbnail: 'thumbnail'
};
exports.OrderStatus = exports.$Enums.OrderStatus = {
  Ordered: 'Ordered',
  InProgress: 'InProgress',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled',
  InReturn: 'InReturn',
  Completed: 'Completed'
};

exports.Prisma.ModelName = {
  Product: 'Product',
  User: 'User',
  Cart: 'Cart',
  Order: 'Order',
  Address: 'Address',
  OrderItem: 'OrderItem',
  Review: 'Review',
  Article: 'Article'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
