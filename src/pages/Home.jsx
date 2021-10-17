import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';

import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import ProductCard from '../components/ProductCard';
import banner from '../assets/images/banner-1.jpg';

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <HeroSlider 
            slider={heroSliderData} 
            control={true}
            auto={true}
            timeOut={5000}
            />
            <Section >
                <SectionBody >
                <Grid 
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >

                    {
                        policy.map((item,index)=>(
                            <Link to='/policy'  key={index}>
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))
                    }
                </Grid>
                </SectionBody>
            </Section>
            {/* end policy */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tháng
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={2}
                        gap={20}
                    >
                        {productData.getProducts(4).map((product,index)=>(
                            <ProductCard
                                key={index}
                                img01={product.image01}
                                img02={product.image02}
                                name={product.title}
                                slug={product.slug}
                                price={Number(product.price)}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling */}
            <Section>
                <SectionTitle>
                    sản phẩm mới nhất
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    >
                        {productData.getProducts(8).map((product,index)=>(
                            <ProductCard
                                key={index}
                                img01={product.image01}
                                img02={product.image02}
                                name={product.title}
                                slug={product.slug}
                                price={Number(product.price)}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best new */}
            {/* banner */}
            <Section>
                <SectionBody>
                    <img src={banner} alt="" />
                </SectionBody>
            </Section>
            {/* end banner */}
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={10}
                    >
                        {productData.getProducts(15).map((product,index)=>(
                            <ProductCard
                                key={index}
                                img01={product.image01}
                                img02={product.image02}
                                name={product.title}
                                slug={product.slug}
                                price={Number(product.price)}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular */}
        </Helmet>
    )
}

export default Home
