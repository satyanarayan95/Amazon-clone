import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import { Header } from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        <Banner />

        <ProductFeed products={products} />

      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session=await getSession(context);
  let products=await fetch("https://fakestoreapi.com/products").then(
    res=>res.json()
  );
  // const newProduct={
  //   ...products,
  //   price:products.price*60
  // }
  // products=newProduct;
  return {
    props:{
      products,
      session,
    },
  };
}
