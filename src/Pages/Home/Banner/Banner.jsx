import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className=''>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
              <div className='h-[250px] md:h-[400px] lg:h-[650px] relative'>
                    <div className='w-full h-full'>
                        <img className='object-cover h-full rounded-md' src='https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                        <div className='absolute inset-0  text-white lg:left-[10%] lg:top-[20%] lg:h-[500px] lg:w-[500px] md:left-[5%] md:top-[10%] md::h-[300px] md:w-[400px] hidden md:block lg:block'>
                            <h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>Welcome To Our Gift Shop</h1>
                            <p className='mt-4 text-sm text-center md:text-base lg:text-lg'>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                            <button className='px-4 py-3 mt-6 btn btn-accent'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='h-[250px] md:h-[400px] lg:h-[650px] relative'>
                    <div className='w-full h-full'>
                        <img className='object-cover h-full rounded-md' src='https://i.ibb.co/LJQPzZg/black-friday-elements-assortment.jpg' />
                        <div className='absolute inset-0  text-white lg:left-[10%] lg:top-[20%] lg:h-[500px] lg:w-[500px] md:left-[5%] md:top-[10%] md::h-[300px] md:w-[400px] hidden md:block lg:block'>
                            <h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>Welcome To Our Gift Shop</h1>
                            <p className='mt-4 text-sm text-center md:text-base lg:text-lg'>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                            <button className='px-4 py-3 mt-6 btn btn-accent'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='h-[250px] md:h-[400px] lg:h-[650px] relative'>
                    <div className='w-full h-full'>
                        <img className='object-cover h-full rounded-md' src='https://images.unsplash.com/photo-1614110073736-1778d27f588a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                        <div className='absolute inset-0  text-white lg:left-[50%] lg:top-[20%] lg:h-[500px] lg:w-[500px] md:right-[5%] md:top-[10%] md::h-[300px] md:w-[400px] hidden md:block lg:block'>
                            <h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>Welcome To Supper Shop</h1>
                            <p className='mt-4 text-sm text-center md:text-base lg:text-lg'>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                            <button className='px-4 py-3 mt-6 btn btn-accent'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
