import React from 'react'
import Feature from './Feature'

export default function FeatureSection() {
    return (
        <div className="featureflex">
            <Feature image="feature1.png" h1="No Minimum Order" p="Order in for yourself or for the group, with no restrictions on order value"/>
            <Feature image="feature2.png" h1="Live Order Tracking" p="Know where your order is at all times, from the restaurant to your doorstep "/>
            <Feature image="feature3.png" h1="Lightning-Fast Delivery" p="Experience Swiggy's superfast delivery for food delivered fresh & on time"/>
        </div>
    )
}
