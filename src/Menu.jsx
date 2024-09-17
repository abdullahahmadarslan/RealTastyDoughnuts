import React from 'react';


const Menu = () => {
    // Sample Data
    const donuts = [
        {
            image: '/c1.png',
            title: 'Espresso',
            description: 'A rich, intense coffee shot made by forcing hot water through finely-ground coffee beans. Typically served in small amounts.',
            price: '2.50'
        },
        {
            image: '/c2.png',
            title: 'Cortado',
            description: 'A balanced coffee drink with equal parts espresso and steamed milk, known for its smooth, silky texture.',
            price: '2.50'
        },
        {
            image: '/c3.png',
            title: 'Flat White',
            description: 'A small, strong coffee with a velvety layer of microfoam. Made with a shot of espresso and lightly steamed milk.',
            price: '2.50'
        },
        {
            image: '/c4.png',
            title: 'Cappuccino',
            description: 'A popular coffee with a shot of espresso, steamed milk, and a thick layer of milk froth on top, often dusted with cocoa.',
            price: '2.50'
        },
        {
            image: '/c5.png',
            title: 'Latte',
            description: 'A creamy coffee made with a shot of espresso and steamed milk, topped with a light layer of froth. Typically served in a glass.',
            price: '2.50'
        },
        {
            image: '/c6.png',
            title: 'Americano',
            description: 'A smooth coffee drink made by diluting a shot of espresso with hot water, giving it a similar strength to filter coffee.',
            price: '2.50'
        }
    ];


    return (
        <div id='menu' className='h-auto container py-5'>
            <h1 className='menu-heading text-center'>Menu</h1>
            <div className="row">
                {donuts.map((donut, index) => (
                    <div className="col-md-4 col-sm-12 mb-4 " key={index}>
                        <div className="card h-100 text-center border-0 ">
                            <img src={donut.image} className="card-img-top img-fluid rounded-4" alt={donut.title} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>{donut.title}</h5>
                                <p className="card-text">{donut.description}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
