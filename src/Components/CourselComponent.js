import React from 'react'
import { Carousel } from 'react-bootstrap';

export const CourselComponent = () => {

    const image1 = process.env.PUBLIC_URL + '/images/image1.png';
    const image2 = process.env.PUBLIC_URL + '/images/image2.jpg';
    const image4 = process.env.PUBLIC_URL + '/images/image4.png';
    const image10 = process.env.PUBLIC_URL + '/images/image10.png';
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ objectFit: 'cover', height: '400px' }}
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Quick Access</h3>
                    <p>Access your data quickly within a click</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ objectFit: 'cover', height: '400px' }}
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Manage</h3>
                    <p>Manage your data with their groups</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ objectFit: 'cover', height: '400px' }}
                    className="d-block w-100"
                    src={image10}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Technical Support</h3>
                    <p>We provide Technical Support for the User Data</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ objectFit: 'cover', height: '400px' }}
                    className="d-block w-100"
                    src={image4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3> Globally Available</h3>
                    <p>You can access your data globally</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
