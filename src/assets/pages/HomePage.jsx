import React from 'react'

import PageLayout from '../layouts/PageLayout'
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Categories from '../components/Categories'

const HomePage = () => {

    return (
        <>
            <Header />
            <PageLayout>
                <ImageSlider />
                <Services />
                <Categories />
            </PageLayout>
            <Menu />
        </>
    )
}

export default HomePage