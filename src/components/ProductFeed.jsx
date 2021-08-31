import Products from "./Products"

export default function ProductFeed({products}) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
            {products.slice(0,4).map(({id,price,description,category,image,title})=>(
                <Products
                    key={id}
                    id={id}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    title={title}
                />
            ))}

            <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt='' />

            <div className='md:col-span-2'>
            {products.slice(4,5).map(({id,price,description,category,image,title})=>(
                <Products
                    key={id}
                    id={id}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    title={title}
                />
            ))}
            </div>
            {products.slice(5,products.length).map(({id,price,description,category,image,title})=>(
                <Products
                    key={id}
                    id={id}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    title={title}
                />
            ))}
        </div>
    )
}
